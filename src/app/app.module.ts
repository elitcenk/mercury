import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
// import {LoginModule} from '../../components/login/login.module';
import {LoginGithubModule} from '../../components/login-github/login-github.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoginGithubModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
