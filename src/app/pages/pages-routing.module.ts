import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesPage } from './pages.page';

const routes: Routes = [
  {
    path: '',
    component: PagesPage
  },
  {
    path: 'list-organization',
    loadChildren: () => import('./list-organization/list-organization.module').then( m => m.ListOrganizationPageModule)
  },
  {
    path: 'add-organization',
    loadChildren: () => import('./add-organization/add-organization.module').then( m => m.AddOrganizationPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesPageRoutingModule {}
