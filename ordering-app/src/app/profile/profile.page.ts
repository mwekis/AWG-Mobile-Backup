import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user: any = {};

  constructor() { }

  ngOnInit() {
  }

  save()
  {
    console.log(this.user);
  }

}
