import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders} from '@angular/common/http';
import{  InsertedSuccess,Read,Students,UniqueConstraintError}from './tabel';
import { Observable } from "rxjs";
import { Pesticide } from './tabel1';

@Injectable({
  providedIn: 'root'
})
export class PestserveService {

  constructor(private http: HttpClient) { }

  headers = new HttpHeaders({
    'content-type': 'application/json',
    Authentication: 'Bearer' + localStorage.getItem('token'),
  });
  private url = 'http://localhost:7000/';

  Insert(
    Details: Pesticide
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'pesticide/Insert',
      Details,
      { headers: this.headers }
    );
  }
   Read(crop_name: string): Observable<Read> {
    return this.http.get<Read>(`${this.url}pesticide/Read${crop_name}`);
  }
  Delete(crop_name: string): Observable<InsertedSuccess> {
    console.log(`${this.url}pesticide/Delete${crop_name}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}pesticide/Delete${crop_name}`
    );
  }
  Update(crop_name: string, Details:Pesticide) {
    return this.http.put(`${this.url}pesticide/Update${crop_name}`, Details, {
      headers: this.headers,
    });
  }
  Showoff(){};


}
