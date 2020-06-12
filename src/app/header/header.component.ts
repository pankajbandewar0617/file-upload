import { Component, OnInit, ViewChild } from '@angular/core';
import { ContextMenuComponent, ContextMenuService } from 'ngx-contextmenu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private contextMenuService: ContextMenuService) {}

  ngOnInit(): void {}
  countries = ['IND', 'US'];
  flags = {
    IND: 'https://restcountries.eu/data/ind.svg',
    US: 'https://restcountries.eu/data/usa.svg',
  };

  selectedFlag: string = this.flags.US;

  menuVisible: boolean = false;

  left: any;
  top: any;
  mystyle = {
    background: 'red',
    border: 'solid 4px blue',
  };

  @ViewChild(ContextMenuComponent) public basic: ContextMenuComponent;

  onSelect(event) {
    const value = event.target.value;
    this.selectedFlag = this.flags[value];
  }

  showMessage(e) {
    console.log(e);
    console.log('Its working');
  }
}
