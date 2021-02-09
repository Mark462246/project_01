import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListOrganizationPage } from './list-organization.page';

const routes: Routes = [
  {
    path: '',
    component: ListOrganizationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListOrganizationPageRoutingModule {}
