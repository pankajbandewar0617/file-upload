import { Component, OnInit } from '@angular/core';
import { ShowDataService } from '../show-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  countries: any[];
  constructor(private dataService: ShowDataService, private router: Router) {}

  ngOnInit() {
    this.dataService.getData().subscribe((data) => {
      this.countries = data;
    });
  }

  goBack() {
    this.router.navigate(['/file-upload']);
  }
}
