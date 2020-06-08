import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpEventType } from '@angular/common/http';
import { FileUploadService } from '../file-upload.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

// export interface UserData {
//   date_closed: string;
//   product: string;
//   inquiry: string;
//   document: string;
//   action: string;
//   review: string;
// }

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  jobID: string;
  extractedData: any;
  colWidth: string;

  // column you want to display

  displayedColumns: string[] = [
    'name',
    'capital',
    'population',
    'region',
    'area',
  ];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private dataService: FileUploadService, private router: Router) {}

  ngOnInit() {
    this.dataService.data$.subscribe((data: any) => {
      this.jobID = data[0].jobID;
      this.extractedData = data[1].extractedData;
      this.dataSource = new MatTableDataSource(this.extractedData);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.colWidth = 100 / this.displayedColumns.length + '%';
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  goBack() {
    this.router.navigate(['../']);
  }
}
