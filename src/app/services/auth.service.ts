import { Injectable } from '@angular/core';
import { Constants } from '../constants';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private route: Router) { }

  login(token: string){
    localStorage.setItem(Constants.Common.tokenKey, token);
    this.route.navigate(['/movies']);
  }

  logout(){
    localStorage.removeItem(Constants.Common.tokenKey);
    this.route.navigate(['login']);
  }

  isLoggedIn(){
    return this.getToken() !== null;
  }

  getToken(){
    return localStorage.getItem(Constants.Common.tokenKey);
  }
}
