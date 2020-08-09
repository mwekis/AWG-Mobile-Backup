import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-review',
  templateUrl: './order-review.page.html',
  styleUrls: ['./order-review.page.scss'],
})
export class OrderReviewPage implements OnInit {

  minDate: string = new Date().toISOString();
  maxDate: any = (new Date()).getFullYear() + 1;

  order: any = {};

  constructor(public alertController: AlertController, private router: Router, public activeRoute: ActivatedRoute) { }

  ngOnInit() {
    let data1 = this.activeRoute.snapshot.paramMap.get('number');
    return(data1);
  }

  items: number[][] = [
    [460700, 40, 401],
    [560130, 20, 370],
    [520640, 50, 401]
  ];

  delete(i)
  {
    console.log('deleted');
    this.items.splice(i, 1);
  }

  async confirmOrder() {
    const alert = await this.alertController.create({
      header: 'Confirm Order',
      message: 'Would you like to confirm your order?  You cannot easily undo this.',
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
      message: 'Your order has been confirmed',
      buttons: [
        {
          text: 'Okay',
          handler: () => {
            console.log('Handled');
            this.router.navigateByUrl('/orders');
          }
        }
    ],
    });
  
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

}
