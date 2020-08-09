import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactCSCPageRoutingModule } from './contact-csc-routing.module';

import { ContactCSCPage } from './contact-csc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactCSCPageRoutingModule
  ],
  declarations: [ContactCSCPage]
})
export class ContactCSCPageModule {}
