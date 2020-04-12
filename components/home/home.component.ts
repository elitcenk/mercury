import { Component, OnInit } from '@angular/core';
import {UserService} from '@bit/onuraltindag.atomiss-mercury.mock-services';

@Component({
  selector: 'mrc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: UserService) {
    this.service.setHomePageLoaded();
  }

  ngOnInit() {
  }
}
