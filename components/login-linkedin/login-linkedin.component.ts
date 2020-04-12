import {Component, OnInit} from '@angular/core';
import {AuthService, LinkedinLoginProvider} from 'angular-6-social-login';
import {UserService} from '@bit/onuraltindag.atomiss-mercury.mock-services';

@Component({
    selector: 'mrc-login-linkedin',
    templateUrl: './login-linkedin.component.html',
    styleUrls: ['./login-linkedin.component.css']
})
export class LoginLinkedinComponent implements OnInit {

    constructor(public OAuth: AuthService, private userService: UserService) {
    }

    ngOnInit() {
    }

    socialSignIn(platform: string): void {
        let socialPlatformProvider;
        if (platform === 'linkedin') {
            socialPlatformProvider = LinkedinLoginProvider.PROVIDER_ID;
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
