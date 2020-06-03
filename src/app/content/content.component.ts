import { Component, OnInit } from '@angular/core';
import { ShowDataService } from '../show-data.service';
import { Router } from '@angular/router';
import { HttpEventType } from '@angular/common/http';
import { compileDirectiveFromMetadata } from '@angular/compiler';
import { FileUploadComponent } from '../file-upload/file-upload.component';
import { FileUploadService } from '../file-upload.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  countries: {};
  constructor(private dataService: FileUploadService, private router: Router) {}

  ngOnInit() {
    this.dataService.data$.subscribe((data) => {
      this.countries = data;
    });
  }

  goBack() {
    this.router.navigate(['../']);
  }
}
