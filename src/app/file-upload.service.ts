import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  data: any = [];
  private extractedData = new BehaviorSubject<object>(this.data);
  data$ = this.extractedData.asObservable();
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data' }),
  };

  constructor(private http: HttpClient) {}

  // remove 'https://example.com' from url and paste your url for uploading file

  url = `https://example.com`;

  uploadFile(file: any): Observable<any> {
    return this.http.post<any>(this.url, file, this.httpOptions);
  }

  sendData(data: any[]) {
    this.extractedData.next(data);
  }

  // in place of this.url paste your url for extracting file with jobID parameters

  getData(jobID: string): Observable<any> {
    return this.http.get(`${this.url}?jobID=${jobID}`);
  }
}

// {
//   reportProgress: true,
//   observe: 'body',
// }
