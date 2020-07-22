import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {
  constructor(private formBuilder: FormBuilder
              ) { }
  loginForm: FormGroup;
  maxDate = new Date();
  minDate = new Date(1900, 0, 1);
  email: string;
  password: string;
  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
  passwordRegx = /^(?=.*[!@#$%^&*]+)[a-z0-9!@#$%^&*]{6,32}$/;
  usernameRegx = /^[a-z]{6,32}$/i;
  // tslint:disable-next-line:typedef
  signUpForm: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        email: [null, [Validators.required, Validators.pattern(this.emailRegx)]],
        password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(32), Validators.pattern(this.passwordRegx)]],
        rememberMe: false
      }
    );
    this.signUpForm = this.formBuilder.group(
      {
        username: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(32), Validators.pattern(this.usernameRegx)]],
        email: [null, [Validators.required, Validators.pattern(this.emailRegx)]],
        password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(32), Validators.pattern(this.passwordRegx)]],
        // tslint:disable-next-line:max-line-length
        confirmPassword: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(32), Validators.pattern(this.passwordRegx)]],
        gender: [null, [Validators.required]],
        birthday: [1, [Validators.required]]
      }
    );
  }
  // tslint:disable-next-line:typedef
  onSubmitSignIn() {}
  // tslint:disable-next-line:typedef
  onSubmitSignUp() {}

}
