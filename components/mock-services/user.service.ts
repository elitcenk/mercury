import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class UserService {
  // v1.0.1
  // static users = new Map().set('admin', 'admin').set('demo', 'demo');

  // v1.0.4
  users = new Map();

  private loginStatus = new BehaviorSubject(false);
  private userName = new BehaviorSubject('Guest');
  private homePageLoaded = new BehaviorSubject(false);


  currentStatus = this.loginStatus.asObservable();
  currentUserName = this.userName.asObservable();
  currentHomePageLoaded = this.homePageLoaded.asObservable();


  constructor() {
    this.users.set('admin', 'admin');
    this.users.set('demo', 'demo');
    // this.loginStatus.next(false);
  }

  // -------------------USER LOGIN METHODS-------------------

  // Validate username and password for login
  checkLogin(userName, password) {
    console.log('login method');
    if (this.users.get(userName) === password) {
      // this.routeByUrl('userhome');
      this.loginStatus.next(true);
    } else {
      this.userName.next('Guest');
      this.loginStatus.next(false);
    }
    return this.loginStatus.getValue();
  }

  // Get user login status for home page
  changeLoginStatus(newStatus: boolean) {
    this.loginStatus.next(newStatus);
  }

  getLoginStatus() {
    if (this.loginStatus.value) {
      console.log('Current status login TRUE');
    } else {
      console.log('Current status login FALSE');
    }
    // return this.loginStatus.getValue();
    return this.loginStatus.value;
  }

  // Get user info
  changeUserName(userName: string) {
    this.userName.next(userName);
  }

  getUserName() {
    return this.userName.getValue();
  }

  // -------------------END OF USER LOGIN METHODS-------------------

  // -------------------USER LOGOUT METHODS-------------------
  // Signout  clear login data
  singOut() {
    this.changeLoginStatus(false); /// Set login status to false
    this.changeUserName('Guest'); /// Set username to default value
  }

  // -------------------END OF USER LOGOUT METHODS-------------------

  // -------------------HOME PAGE METHODS-------------------

  setHomePageLoaded() {
    this.homePageLoaded.next(true);
  }

  getHomePageLoaded() {
    return this.homePageLoaded.getValue();
  }

  // -------------------END OF HOME PAGE METHODS-------------------


  // -------------------USER REGISTER METHODS-------------------
  confirmPassword(password1, password2) {
    return password1 === password2;
  }

  regUserExist(userName) {
    return this.users.has(userName);
  }

  regAddNewUser(userName, password) {
    this.users.set(userName, password);
  }

  // -------------------END OF USER REGISTER METHODS-------------------

}



