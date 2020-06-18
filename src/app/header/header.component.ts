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

  left: string;
  top: string;
  menuVisible: boolean = false;

  @ViewChild(ContextMenuComponent) public basic: ContextMenuComponent;

  onSelect(event) {
    const value = event.target.value;
    this.selectedFlag = this.flags[value];
  }

  open(ev: MouseEvent) {
    ev.preventDefault();
    const menu = document.getElementsByClassName(
      'context-menu'
    )[0] as HTMLElement;
    const { width, height } = menu.getBoundingClientRect();

    if (window.innerWidth - ev.pageX < width) {
      this.left = window.innerWidth - width + 'px';
    } else {
      this.left = ev.pageX + 'px';
    }
    if (window.innerHeight - ev.pageY < height) {
      this.top = window.innerHeight - height + 'px';
    } else {
      this.top = ev.pageY + 'px';
    }

    this.menuVisible = true;

    window.addEventListener('keydown', myFunction.bind(this));

    function myFunction(e) {
      if (e.keyCode == 27) {
        this.menuVisible = false;
      }
    }
  }

  close() {
    this.menuVisible = false;
  }
}
