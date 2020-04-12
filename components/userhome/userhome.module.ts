import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserhomeComponent} from './userhome.component';

@NgModule({
  declarations: [UserhomeComponent],
  imports: [
    CommonModule
  ],
  exports: [UserhomeComponent]
})
export class UserhomeModule {
}
