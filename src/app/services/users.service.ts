import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LOGIN, USER_REGISTER_URL } from '../shared/constants/urls';
import { User } from '../shared/models/user.model';
import { IUserLogin } from '../shared/interfaces/IUserLogin';
import { tap } from 'rxjs';
import { IUserRegister } from '../shared/interfaces/IUserRegister';
import {
  MatSnackBar
} from '@angular/material/snack-bar';

const USER_KEY = 'User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private userSubject = new BehaviorSubject<User>(this.getUserFromLocalStorage()); // this is just a readonly version, why we need to turn it into an observable
  public userObservable: Observable<User>;

  constructor(
    private http: HttpClient,
    private _snackBar: MatSnackBar,
    ) {
    this.userObservable = this.userSubject.asObservable();
   }

   public get currentUser(): User {
    return this.userSubject.value;
    // to get the LATEST values of the user subject
   }

  login(userLogin: IUserLogin): Observable<User> {
    return this.http.post<User>(LOGIN, userLogin)
      .pipe( tap({
        next: (user) => {
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
        },
        error: (errorRes) => {
          this._snackBar.open(errorRes.message, "Ok", {
            duration: 3000,
            panelClass: ['snackbar-error'],
          });
        }
      }))
  }

  register(userRegister: IUserRegister): Observable<User> {
    return this.http.post<User>(USER_REGISTER_URL, userRegister).pipe(
      tap({
        next: (user) => {
          this.setUserToLocalStorage(user);
          this.userSubject.next(user)
        },
        error: (errorRes) => {
          return errorRes.error;
        }
      })
    )
  }

  logout() {
    this.userSubject.next(new User());
    localStorage.removeItem(USER_KEY);
    localStorage.removeItem('Cart');
    window.location.reload(); // refresh the page
  }

  private setUserToLocalStorage(user: User) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  private getUserFromLocalStorage(): User {
    const userJson = localStorage.getItem(USER_KEY);
    if (userJson) return JSON.parse(userJson) as User;
    return new User(); // if user is null
  }
}
