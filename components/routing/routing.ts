import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, ActivatedRoute, RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '@bit/onuraltindag.atomiss-mercury.login/login.component';
import {LoginModule} from '@bit/onuraltindag.atomiss-mercury.login/login.module';
import {RegisterComponent} from '@bit/onuraltindag.atomiss-mercury.register/register.component';
import {UserhomeComponent} from '@bit/onuraltindag.atomiss-mercury.userhome/userhome.component';
import {HomeComponent} from '@bit/onuraltindag.atomiss-mercury.home/home.component';
import {UserprofileComponent} from '@bit/onuraltindag.atomiss-mercury.userprofile/userprofile.component';
import {UserService} from '@bit/onuraltindag.atomiss-mercury.mock-services';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'userhome', component: UserhomeComponent},
  {path: 'signout', component: LoginComponent},
  {path: 'userprofile', component: UserprofileComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  // { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

export const routerModuleForChild = RouterModule.forRoot(routes);

@NgModule({
  declarations: [],
  // imports: [RouterModule.forRoot(routes)],
  imports: [routerModuleForChild],
  exports: [RouterModule],
  providers: [Routing]
})
export class Routing {
  constructor() {
  }


}
