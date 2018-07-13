import { Injectable } from '@angular/core';
import { Constants } from '../constants';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private route: Router) { }

  login(user: IUser){
    localStorage.setItem(Constants.Common.tokenKey, user.currentToken);
    localStorage.setItem(Constants.Common.loggedInUserId, user.id.toString());
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

  getLoggedInUserId(){
    return localStorage.getItem(Constants.Common.loggedInUserId);
  }

  setSearchText(text: string){
    sessionStorage.setItem(Constants.Common.searchStorageKey, text);
  }

  getSearchText(){
    return sessionStorage.getItem(Constants.Common.searchStorageKey);
  }
}
