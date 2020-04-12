import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '@bit/onuraltindag.atomiss-mercury.mock-services';

@Component({
  selector: 'mrc-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  constructor(private service: UserService) { }

  ngOnInit() {
  }

  getUserName() {
    return this.service.getUserName();
  }

}
