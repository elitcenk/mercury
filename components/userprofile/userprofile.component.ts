import {Component, OnInit} from '@angular/core';
import {UserService} from '@bit/onuraltindag.atomiss-mercury.mock-services';

@Component({
  selector: 'mrc-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  constructor(private service: UserService) {
  }

  ngOnInit() {
  }

  getUserName() {
    return this.service.getUserName();
  }
}
