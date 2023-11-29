import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:7000/api'; // Replace with your API URL

  constructor(private http: HttpClient ) {}

  login(email: string, pass: string): Observable<any> {
    const Students = { email, pass };
    return this.http.post(`${this.apiUrl}/login`, Students);
  }
}
