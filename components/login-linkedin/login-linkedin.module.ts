import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginLinkedinComponent} from './login-linkedin.component';
import {CommonModule} from '@angular/common';
import {AuthService, AuthServiceConfig, LinkedinLoginProvider} from 'angular-6-social-login';


export function socialConfigs() {
    return new AuthServiceConfig([
        {
            id: LinkedinLoginProvider.PROVIDER_ID,
            provider: new LinkedinLoginProvider(
                'Linkedin Application ClientId'
            )
        }
    ]);
}

@NgModule({
    declarations: [LoginLinkedinComponent],
    imports: [CommonModule, ReactiveFormsModule],
    providers: [
        AuthService,
        {
            provide: AuthServiceConfig,
            useFactory: socialConfigs
        }
    ],
    exports: [LoginLinkedinComponent]
})
export class LoginLinkedinModule {

}
