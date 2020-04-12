import {Component, OnInit} from '@angular/core';
import {UserService} from '@bit/onuraltindag.atomiss-mercury.mock-services';
import {GoogleLoginProvider, AuthService} from 'angular-6-social-login';

@Component({
    selector: 'mrc-login-google',
    templateUrl: './login-google.component.html',
    styleUrls: ['./login-google.component.css']
})
export class LoginGoogleComponent implements OnInit {
    constructor(public OAuth: AuthService, private userService: UserService) {
    }

    ngOnInit() {
    }

    socialSignIn(platform: string): void {
        let socialPlatformProvider;
        if (platform === 'google') {
            socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
        }
        this.OAuth.signIn(socialPlatformProvider).then(response => {
            console.log(platform + ' logged in user data is= ', response);
            this.userService.changeUserName(response.name);
            this.userService.changeLoginStatus(true);
        });
    }

}
