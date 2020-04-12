import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {UserService} from '@bit/onuraltindag.atomiss-mercury.mock-services';

@Component({
    selector: 'mrc-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    authenticationError = false;
    username = null;
    loginForm = this.formBuilder.group({
        username: '',
        password: ''
    });

    constructor(
        private formBuilder: FormBuilder,
        private service: UserService
    ) {
    }

    ngOnInit() {
    }

    login() {
        console.warn('Login form submitted.', this.loginForm);
        if (this.service.checkLogin(this.loginForm.get('username').value, this.loginForm.get('password').value)) {
            this.authenticationError = false;
            this.username = this.loginForm.get('username').value;
        } else {
            this.authenticationError = true;
            this.username = null;
        }
        this.loginForm.reset();
    }
}
