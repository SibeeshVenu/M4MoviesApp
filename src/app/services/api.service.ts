import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestOptions, RequestMethod, Response } from '@angular/http';
import { throwError } from 'rxjs';
import { filter, map, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Constants } from '../constants';
import { AuthService } from './auth.service';

@Injectable()
export class ApiService {
  private baseUrl: string;
  constructor(private http: Http, private auth: AuthService) {
  }

  request(url: string, method: RequestMethod, body?: Object) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    if (this.isAuthApiCall(url)) {
      this.baseUrl = environment.authApiUrl;      
    }else{
      this.baseUrl = environment.apiUrl;  
      headers.append("Authorization", `Bearer ${this.auth.getToken()}`)   
    }
    
    const requestOptions = new RequestOptions({
      url: `${this.baseUrl}${url}`,
      method: method,
      headers: headers
    });

    if (body) {
      requestOptions.body = body;
    }

    const request = new Request(requestOptions);
    return this.http.request(request)
      .pipe(map((res: Response) => res.json()),
        catchError((res: Response) => this.onError(res)));
  }

  isAuthApiCall(url: string) {
    return (url === Constants.UrlConstants.register || url === Constants.UrlConstants.login);
  }
  
  onError(res: Response) {
    const statusCode = res.status;
    const body = res.json();
    const error = {
      statusCode: statusCode,
      error: body
    };
    return throwError(error);
  }

  get(url: string) {
    return this.request(url, RequestMethod.Get);
  }

  post(url: string, body: Object) {
    return this.request(url, RequestMethod.Post, body);
  }

  put(url: string, body: Object) {
    return this.request(url, RequestMethod.Put, body);
  }

  delete(url: string, body: Object) {
    return this.request(url, RequestMethod.Delete, body);
  }
}