import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddOrganizationPage } from './add-organization.page';

const routes: Routes = [
  {
    path: '',
    component: AddOrganizationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddOrganizationPageRoutingModule {}
