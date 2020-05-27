import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'myApp';
  files: File[] = [];
  selectedFile = null;
  hasDisabled = true;
  constructor() {}

  onSelect(event) {
    console.log(event);
    console.log(event.addedFiles);
    this.selectedFile = event.addedFiles[0];
    console.log(this.selectedFile);
    this.files.push(...event.addedFiles);
  }
}
