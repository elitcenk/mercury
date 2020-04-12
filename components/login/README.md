 # Simple Login Component
This component is simple login form. To use the component; 

- Import the Login Component


    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';
    import { LoginModule } from '@bit/onuraltindag.atomiss-mercury.login';

    @NgModule({
	    declarations: [
		    AppComponent,
	    ],
	    imports: [
		    BrowserModule,
		    LoginModule
	    ],
	    providers: [],
	    bootstrap: [AppComponent]
    })
    export class AppModule { }`



- In html file you can use it like that.

`<app-login></app-login>`
 
