import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileUploadService } from '../file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent implements OnInit {
  files: File[] = [];
  selectedFile = null;
  hasDisabled = true;
  hasUpload = false;

  constructor(private router: Router, private fileUpload: FileUploadService) {}
  ngOnInit(): void {}

  onSelect(event) {
    // console.log(event);
    // console.log(event.addedFiles);
    this.selectedFile = event.addedFiles[0];
    // console.log(this.selectedFile);
    this.files.push(...event.addedFiles);
    if (this.files.length > 0) {
      this.hasDisabled = false;
    }
  }

  onRemove(event) {
    // console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
    if (this.files.length == 0) {
      this.hasDisabled = true;
    }
  }

  onUpload() {
    console.log('upload');
    this.hasUpload = true;
    // const fd = new FormData();
    // fd.append('file', this.selectedFile.name);
    // this.fileUpload.uploadFile(fd).subscribe();
  }

  gotoView() {
    console.log('gotoView');
    this.router.navigate(['/content']);
  }
}
