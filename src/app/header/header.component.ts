import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  countries = ['IND', 'US'];
  flags = {
    IND: 'https://restcountries.eu/data/ind.svg',
    US: 'https://restcountries.eu/data/usa.svg',
  };
  selectedFlag: string = this.flags.US;

  onSelect(event) {
    const value = event.target.value;
    this.selectedFlag = this.flags[value];
  }
}
