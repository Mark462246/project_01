import { StepperSelectionEvent } from "@angular/cdk/stepper";
import { Injectable, ViewChild } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { MatStepper } from "@angular/material/stepper";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { Organization } from "src/app/model/organization.model";

@Injectable({
  providedIn: "root",
})
export class OrganizationService {
  checkOrg: boolean;
  organizations: Organization[] = [];

  constructor(
    private db: AngularFirestore,
    public alertController: AlertController,
    private router: Router
  ) {}

  addOrganization(
    name: string,
    address: string,
    telecomName: string,
    telecomPhone: string,
    active: boolean
  ) {
    let newOrg: Organization;
    newOrg = {
      name: name,
      address: address,
      telecomName: telecomName,
      telecomPhone: telecomPhone,
      active: active,
    };

    if (this.checkOrg == true) {
      this.db.collection("organization").doc(`${name}`).set(newOrg);
      this.router.navigate(["/pages/list-organization"]);
    } else {
      this.presentAlert();
    }
  }

  checkOrganization(name: string, stepper?: MatStepper) {
    this.db
      .collection("organization")
      .doc(name)
      .get()
      .subscribe((doc) => {
        if (doc.exists) {
          this.checkOrg = false;
          this.presentAlert();
        } else {
          this.checkOrg = true;
          stepper.next();
        }
      });
  }

  getOrganizations() {
    this.organizations = [];
    this.db
      .collection("organization")
      .get()
      .subscribe((snap) => {
        snap.forEach((doc) => {
          this.organizations.push({
            name: doc.get("name"),
            telecomName: doc.get("telecomName"),
            address: doc.get("address"),
            telecomPhone: doc.get("telecomPhone"),
            active: doc.get("active"),
          });
        });
      });
    return this.organizations;
  }

  presentAlert() {
    const alert = this.alertController
      .create({
        header: "Alert!",
        message: "The organization already exists.",
        buttons: ["Ok"],
      })
      .then((alertEl) => {
        alertEl.present();
      });
  }
}
