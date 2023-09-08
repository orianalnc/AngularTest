import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personajes } from '../models/personajes';



@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  private apiURL = 'https://swapi.dev/api/people';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };


  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get<any>(`${this.apiURL}/`,);
  }

  getDetail(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.apiURL}/${id}`,);
  }
}
