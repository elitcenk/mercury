import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from '@angular/forms';
import {RegisterComponent} from "./register.component";
import {CommonModule} from "@angular/common";

@NgModule({
    declarations: [
        RegisterComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        RegisterComponent,
    ]
})
export class RegisterModule {
}
