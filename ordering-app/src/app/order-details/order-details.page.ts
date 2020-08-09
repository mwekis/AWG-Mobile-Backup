import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit {

  order: any = {};

  constructor(public alertController: AlertController, private router: Router, public activeRoute:ActivatedRoute) { }

  async confirmOrder() {
    const alert = await this.alertController.create({
      header: 'Confirm Order',
      subHeader: 'Store: ' + this.activeRoute.snapshot.paramMap.get('number'),
      message: 'Delivery Date: ' + this.activeRoute.snapshot.paramMap.get('date').split('T')[0],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Canceled');
          }
        },
        {
          text: 'Okay',
          handler: () => {
            this.confirmed();
            console.log('Confirmed');
          }
        }
      ]
    });
  
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  async confirmed() {
    const alert = await this.alertController.create({
      header: 'Confirmed',
      subHeader: 'Order Number: 51423',
      message: 'Your order has been confirmed.',
      buttons: [
        {
          text: 'Okay',
          handler: () => {
            console.log('Handled');
            this.router.navigateByUrl('/new-order');
          }
        }
    ],
    });
  
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  items: number[][] = [
    [460700, 40, 401],
    [560130, 20, 370],
    [520640, 50, 401]
  ];


  add()
  {
    if (this.order.icode == "" || this.order.quantity == undefined)
    {
      console.log("Please add an item code and a quantity.");
    }
    else
    {
      this.items.push([this.order.icode, this.order.quantity, this.order.bcode]);
      console.log([this.order.icode, this.order.quantity, this.order.bcode]);
    }
  }

  delete(i)
  {
    console.log('deleted');
    this.items.splice(i, 1);
  }

  ngOnInit() {
    let data1 = this.activeRoute.snapshot.paramMap.get('number');
    let data2 = this.activeRoute.snapshot.paramMap.get('date');
    console.log(data1);
    console.log(data2.split('T')[0]);
  }

}
