import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginGithubComponent} from './login-github.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [LoginGithubComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule],
  providers: [],
  exports: [LoginGithubComponent]
})
export class LoginGithubModule {
}
