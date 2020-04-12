import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'mrc-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Input() title: string;
  counter = 0;  // it shouldn't be static or component reloads increment the counter.
                // doesn't matter when a proper service is used for counting.

  constructor() {
    this.counter++; // TODO: get last or incremented value from a counter service by
                    // sending a browser fingerprint, user name, cookie etc.
                    // we can use different services for different counting purposes
                    // like currently online users, current anonymous visitors, total
                    // site visits etc.
  }

  ngOnInit() {
  }

  getTitle() {
    this.title = "Online visitors :";
    return this.title;
  }

  getCount() {
    return this.counter; // service isn't being called here to reduce service calls.
  }

}
