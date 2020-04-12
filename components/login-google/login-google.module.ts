import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginGoogleComponent} from './login-google.component';
import {CommonModule} from '@angular/common';
import {AuthService, AuthServiceConfig, GoogleLoginProvider} from 'angular-6-social-login';

export function socialConfigs() {
    return new AuthServiceConfig([
        {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
                '535936963703-ihg1i2f7d059308fnkqkndr536o6q1p1.apps.googleusercontent.com'
            )
        }
    ]);
}

@NgModule({
    declarations: [LoginGoogleComponent],
    imports: [CommonModule, ReactiveFormsModule],
    providers: [
        AuthService,
        {
            provide: AuthServiceConfig,
            useFactory: socialConfigs
        }
    ],
    exports: [LoginGoogleComponent]
})
export class LoginGoogleModule {
}
