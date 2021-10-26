import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/UserServices/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  registerForm!: FormGroup;
  loginSubmitted = false;
  signupSubmitted = false;
  hide: boolean = true;

  constructor(private formBuilder: FormBuilder, private snackbar: MatSnackBar, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobileNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    });
  }

  get f() { return this.loginForm.controls; }

  get r() { return this.registerForm.controls; }

  showPassword() {
    this.hide = !this.hide;
  }

  onLogin() {
    this.loginSubmitted = true;

    if (this.loginForm.invalid) {
      return;
    }
    else {
      let reqPayload = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      }

      console.log(this.loginForm.value);

      this.userService.loginService(reqPayload).subscribe((res: any) => {
        console.log(res);

        console.log(res.message);
        this.snackbar.open(res.message, '', { duration: 3000 });
        this.router.navigateByUrl('/home')
      }, error => {
        console.log(error);
        this.snackbar.open(error, '', { duration: 3000 });
      });
    }
  }

  onSignup() {
    this.signupSubmitted = true;

    if (this.registerForm.invalid) {
      return;
    }
    else {
      let reqPayload = {
        fullName: this.registerForm.value.fullName,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
        phone: this.registerForm.value.mobileNumber,
      }
      console.log(this.registerForm.value);

      this.userService.signupService(reqPayload).subscribe((res: any) => {
        console.log(res);

        console.log(res.message);
        this.snackbar.open(res.message, '', { duration: 3000 });

        localStorage.setItem('fullName', res.result.fullName);
        localStorage.setItem('email', res.result.email);
        localStorage.setItem('phoneNumber', res.result.phone);
        localStorage.setItem('password', res.result.password);
      }, error => {
        console.log(error);
        this.snackbar.open(error, '', { duration: 3000 });
      });
    }
  }

}
