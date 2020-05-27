import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShowDataService {
  baseUrl: string = 'https://restcountries.eu/rest/v2/all';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}
