import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignoutComponent} from './signout.component';
import {MatLabel} from '@angular/material';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [SignoutComponent,
    MatLabel],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [SignoutComponent,
    MatLabel]
})
export class SignoutModule {
}
