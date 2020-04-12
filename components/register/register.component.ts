import {Component, AfterViewInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {UserService} from "@bit/onuraltindag.atomiss-mercury.mock-services";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent implements AfterViewInit {
    doNotMatch = false;
    error = false;
    errorEmailExists = false;
    errorUserExists = false;
    success = false;
    password = null;

    registerForm = this.fb.group({
        username: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(50), Validators.pattern('^[_.@A-Za-z0-9-]*$')]],
        email: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(254), Validators.email]],
        password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]]
    });

    constructor(private fb: FormBuilder, public service: UserService) {
    }


    ngAfterViewInit(): void {
    }

    register(): void {
      this.doNotMatch = false;
      this.error = false;
      this.errorEmailExists = false;
      this.errorUserExists = false;

      if (this.registerForm) {
        console.log('register form');
        /// Angular service check
        this.doNotMatch  = !this.service.confirmPassword(this.registerForm.get(['password']).value, this.registerForm.get(['confirmPassword']).value);
        if (!this.doNotMatch) {
          this.errorUserExists = this.service.regUserExist(this.registerForm.get(['username']).value);
          if (!this.errorUserExists) {
            this.service.regAddNewUser(this.registerForm.get(['username']).value, this.registerForm.get(['password']).value);
            this.success = true;
          }
        }
      }

      /// EOF Injectable service
/*
      if (this.registerForm) {
          this.password = this.registerForm.get(['password']).value;

          if (this.password !== this.registerForm.get(['confirmPassword']).value) {
            this.doNotMatch = true;
          } else {
            const userName = this.registerForm.get(['userName'])!.value;
            const email = this.registerForm.get(['email'])!.value;
            if (UserService.users.has(userName)) {
              this.errorUserExists = true;
            } else {
              UserService.users.set(userName, password);
              this.success = true;
            }
          }
        }
*/
    }
}
