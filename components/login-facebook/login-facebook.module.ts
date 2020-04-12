import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginFacebookComponent} from './login-facebook.component';
import {CommonModule} from '@angular/common';
import {AuthService, AuthServiceConfig, FacebookLoginProvider} from 'angular-6-social-login';

export function socialConfigs() {
    return new AuthServiceConfig([
        {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('1006243546438575')
        }
    ]);
}

@NgModule({
    declarations: [LoginFacebookComponent],
    imports: [CommonModule, ReactiveFormsModule],
    providers: [
        AuthService,
        {
            provide: AuthServiceConfig,
            useFactory: socialConfigs
        }
    ],
    exports: [LoginFacebookComponent]
})
export class LoginFacebookModule {
}
