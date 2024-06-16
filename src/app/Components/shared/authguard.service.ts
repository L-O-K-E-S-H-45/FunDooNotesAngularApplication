import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {
  constructor() { }

  getToken(): boolean {
    return !!localStorage.getItem('token');
  }

}
