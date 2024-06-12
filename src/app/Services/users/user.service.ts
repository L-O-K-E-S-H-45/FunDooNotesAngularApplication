import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) { }

  Login(data: any) {
    let header = {
      head: new HttpHeaders({
        'content-type': 'application/json',
      })
    }
    return this.httpService.postService('https://localhost:44348/api/Users/login', data, false, header);
  }

  Register(data: any) {
    let header = {
      head: new HttpHeaders({
        'content-type': 'application/json'
      })
    }

    return this.httpService.postService('https://localhost:44348/api/Users/register', data, false, header);
  }

  ForgotPassword(data: any) {
    let header = {
      head: new HttpHeaders({
        'content-type': 'application/json'
      })
    }

    return this.httpService.postService('https://localhost:44348/api/Users/ForgotPassword?email=' + data.email, {}, false, header);
  }



}
