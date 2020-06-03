import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  data: any = [
    {
      name: 'Afghanistan',
      capital: 'Kabul',
      population: 27657145,
      region: 'Asia',
      area: 652230,
    },
    {
      name: 'Albania',
      capital: 'Tirana',
      region: 'Europe',
      population: 2886026,
      area: 28748,
    },
  ];
  private extractedData = new BehaviorSubject<object>(this.data);
  data$ = this.extractedData.asObservable();

  constructor(private http: HttpClient) {}

  // remove 'https://example.com' from url and paste your url for uploading file

  url = `https://example.com`;

  uploadFile(file: any): Observable<any> {
    return this.http.post(this.url, file, {
      reportProgress: true,
      observe: 'body',
    });
  }

  sendData(data: any[]) {
    this.extractedData.next(data);
  }

  // in place of this.url paste your url for extracting file with jobID parameters

  getData(jobID: string): Observable<any> {
    return this.http.get(`${this.url}?jobID=${jobID}`);
  }
}
