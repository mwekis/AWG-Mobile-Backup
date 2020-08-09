import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  reOrder(i)
  {
    this.router.navigate(['order-review', this.pastOrders[i][0]]);
  }

  pastOrders: string[][] = [
    ['46070', '2020-07-03'],
    ['46215', '2020-06-24'],
    ['41127', '2020-06-11']
  ];

}
