import { Component, OnInit } from '@angular/core';
import {UserService} from '@bit/onuraltindag.atomiss-mercury.mock-services';

@Component({
  selector: 'mrc-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css']
})
export class SignoutComponent implements OnInit {

  constructor(private service: UserService) { }

  ngOnInit() {
  }

  signOut() {
    console.log('signout component');
    this.service.singOut();
  }
}
