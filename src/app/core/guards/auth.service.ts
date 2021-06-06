import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

interface UserDto {
  userName: string;
  password: string;
}
@Injectable({ providedIn: 'root' })
export class AuthenticationService {

  private loggedIn = new BehaviorSubject<boolean>(false);

  // tslint:disable-next-line:typedef
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }


  constructor(
    private router: Router,
    private httpClient: HttpClient
  ) { }

  login (user: UserDto) {
    if (user.userName !== '' && user.password !== ''){
      this.loggedIn.next(true);
      this.router.navigate(['/']);
    }
  }

  logout (){
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}

