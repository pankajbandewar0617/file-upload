import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  constructor(private http: HttpClient) {}

  url = `https://example.com`;

  uploadFile(file: any): Observable<any> {
    return this.http.post(this.url, file);
  }
}
