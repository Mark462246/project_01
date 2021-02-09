import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild
} from "@angular/core";

import {
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { MatStepper } from "@angular/material/stepper";
import { ThemeService } from "src/app/services/theme.service";
import { OrganizationService } from "../../services/organization.service";

@Component({
  selector: "app-add-organization",
  templateUrl: "./add-organization.page.html",
  styleUrls: ["./add-organization.page.scss"],
})
export class AddOrganizationPage implements OnInit{
  nameFormGroup: FormGroup;
  addressTelecomFormGroup: FormGroup;
  contactFormGroup: FormGroup;
  status: boolean = null;
  isLinear = true;

  @ViewChild('stepper', { static: false }) stepper: MatStepper;

  constructor(
    private _formBuilder: FormBuilder,
    public orgService: OrganizationService,
    public themeService: ThemeService
  ) {
    
  }

  ngOnInit() {
    console.log(this.themeService.getDarkMode(), this.themeService.getIsDarkTheme());

    this.nameFormGroup = this._formBuilder.group({
      name: ["", Validators.required],
    });
    this.addressTelecomFormGroup = this._formBuilder.group({
      address: ["", Validators.required],
      telecomName: ["", Validators.required],
      telecomPhone: [
        "",
        [
          Validators.required,
          Validators.pattern("[0-9]*"),
          Validators.maxLength(9),
          Validators.minLength(9),
        ],
      ],
    });
  }

 

  ionicToggleTheme2() {
   
  }

  addOrganization() {
    this.orgService.addOrganization(
      this.nameFormGroup.value.name,
      this.addressTelecomFormGroup.value.address,
      this.addressTelecomFormGroup.value.telecomName,
      this.addressTelecomFormGroup.value.telecomPhone,
      this.status
    );
    this.status = null;
  }

  checkOrganization() {
    this.orgService.checkOrganization(this.nameFormGroup.value.name, this.stepper);
  }

  

}
