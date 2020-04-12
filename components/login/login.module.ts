import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './login.component';
import {CommonModule} from '@angular/common';
import {LoginGoogleModule} from '@bit/onuraltindag.atomiss-mercury.login-google';
import {LoginFacebookModule} from '@bit/onuraltindag.atomiss-mercury.login-facebook';
import {LoginLinkedinModule} from '@bit/onuraltindag.atomiss-mercury.login-linkedin';

@NgModule({
    declarations: [LoginComponent],
    imports: [CommonModule, ReactiveFormsModule, LoginGoogleModule, LoginFacebookModule, LoginLinkedinModule],
    exports: [LoginComponent]
})
export class LoginModule {
}
