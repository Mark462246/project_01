import {
  Component,
  OnDestroy,
  OnInit
} from "@angular/core";
import { Router } from "@angular/router";
import { NavController } from "@ionic/angular";
import { OrganizationService } from "src/app/services/organization.service";
import { ThemeService } from "src/app/services/theme.service";



@Component({
  selector: "app-list-organization",
  templateUrl: "./list-organization.page.html",
  styleUrls: ["./list-organization.page.scss"],
})
export class ListOrganizationPage implements OnInit {

  constructor(
    public orgService: OrganizationService,
    private router: Router, public themeService: ThemeService
  ) { }

  ngOnInit() {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    this.themeService.setDarkMode(prefersDark.matches);
    this.themeService.setIsDarkTheme(this.themeService.getDarkMode());

  }
  ionicToggleTheme() {

  }


  navigate() {
    this.router.navigate(['/pages/add-organization'], { replaceUrl: true });
  }

  ionViewDidEnter() {
    this.orgService.getOrganizations();
  }
}
