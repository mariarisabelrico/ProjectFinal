import { Component, Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, map, throwError } from 'rxjs';
import { LoginI } from '../../shared/models/login.interface';
import { ResponseI } from '../../shared/models/response.interface';
import { catchError } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url: string = 'http://localhost:3000/api/v1/user/';

  constructor(private http: HttpClient) {}

  sinsin(user: any) {
    return this.http.post(`${this.url}login`, user, { responseType: 'text' });
  }
}
