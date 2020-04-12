import {Component, OnInit} from '@angular/core';
import {UserService} from '@bit/onuraltindag.atomiss-mercury.mock-services';
import {FacebookLoginProvider, AuthService} from 'angular-6-social-login';

@Component({
    selector: 'mrc-login-facebook',
    templateUrl: './login-facebook.component.html',
    styleUrls: ['./login-facebook.component.css']
})
export class LoginFacebookComponent implements OnInit {
    constructor(public OAuth: AuthService, private userService: UserService) {
    }

    ngOnInit() {
    }

    socialSignIn(platform: string): void {
        let socialPlatformProvider;
        if (platform === 'facebook') {
            socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
        }
        this.OAuth.signIn(socialPlatformProvider).then(response => {
            console.log(platform + ' logged in user data is= ', response);
            this.userService.changeUserName(response.name);
            this.userService.changeLoginStatus(true);
        });
    }

    // Method to log out.
    socialSignOut(): void {
        this.OAuth.signOut();
        this.userService.singOut();
        console.log('User signed out.');
    }
}
