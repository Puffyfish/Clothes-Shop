import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  loginForm!: FormGroup;
  isSubmitted = false;
  errorMsg:string = '';
  returnUrl = '';

  // snackbar positioning
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  // get emailField() {
  //   return this.loginForm.get('email');
  // }

  // get passwordField() {
  //   return this.loginForm.get('password');
  // }

  constructor(
    private _fb: FormBuilder,
    private _userService: UsersService,
    private _snackBar: MatSnackBar,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    this.returnUrl = this._route.snapshot.queryParams['returnUrl'];
  }

  get fc() {
    return this.loginForm.controls;
  }

  async onSubmit(){
    this.loginForm.markAllAsTouched();
    if (this.loginForm.invalid) return;

    this.isSubmitted = true;

    this._userService.login({
      email: this.fc['email'].value,
      password: this.fc['password'].value})
      .subscribe(() => {
        this._router.navigateByUrl(this.returnUrl);
        console.log('You have successfully logged in.')

        this._snackBar.open("Login success", "Ok", {
          duration: 3000,
          panelClass: ['snackbar-success'],
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition
        })
      })

    }
}
