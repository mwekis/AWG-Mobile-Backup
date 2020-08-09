import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactCSCPage } from './contact-csc.page';

const routes: Routes = [
  {
    path: '',
    component: ContactCSCPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactCSCPageRoutingModule {}
