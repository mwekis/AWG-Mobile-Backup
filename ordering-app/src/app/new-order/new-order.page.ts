import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.page.html',
  styleUrls: ['./new-order.page.scss'],
})
export class NewOrderPage implements OnInit {

  availableStores: string[][] = [
    ['0105', '0105 - Price Chopper'],
    ['0106', '0106 - Price Chopper'],
    ['0120', '0120 - Cosentinos Price Chopper'],
    ['0284', '0284 - Cosentinos Market'],
    ['0415', '0415 - Cosentinos Price Chopper']
  ];

  minDate: string = new Date().toISOString();
  maxDate: any = (new Date()).getFullYear() + 1;

  store;
  date;

  constructor(public router:Router, public alertController: AlertController) { }

  async blankAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'Please select a store and delivery date before proceeding.',
      buttons: ['Ok'],
    });
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  beginOrder()
  {
    if (this.store == undefined || this.date == undefined)
    {
      this.blankAlert();
    }
    else
    {
      console.log('Begun');
      this.router.navigate(['order-details',this.store,this.date]);
    }
  }

  ngOnInit() {
  }

}
