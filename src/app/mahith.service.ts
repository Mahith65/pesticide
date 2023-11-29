


import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders} from '@angular/common/http';
import{  InsertedSuccess,Read,Students,UniqueConstraintError}from './tabel';
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class MahithService {

  constructor(private http: HttpClient) { }

  headers = new HttpHeaders({
    'content-type': 'application/json',
    Authentication: 'Bearer' + localStorage.getItem('token'),
  });
  private url = 'http://localhost:7000/';

  Insert(
    Details: Students
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'students/Insert',
      Details,
      { headers: this.headers }
    );
  }
   Read(email: string): Observable<Read> {
    return this.http.get<Read>(`${this.url}students/Read${email}`);
  }
  Delete(email: string): Observable<InsertedSuccess> {
    console.log(`${this.url}students/Delete${email}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}students/Delete${email}`
    );
  }
  Dlogin(email: string): Observable<Read> {
    return this.http.get<Read>(`${this.url}students/Dlogin${email}`);
  }
  Update(email: string, Details: Students) {
    return this.http.put(`${this.url}students/Update${email}`, Details, {
      headers: this.headers,
    });
  }
  Showoff(){};


}