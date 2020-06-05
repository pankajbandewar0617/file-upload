import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FileUploadService } from '../file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent implements OnInit {
  constructor(
    private router: Router,
    private fileUpload: FileUploadService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  files: File[] = [];
  selectedFile = null;
  hasDisabled = true;
  hasUpload = false;
  uploading = false;
  hasExtract = false;
  extracting = false;
  jobID: string = '55';
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
    {
      name: 'Algeria',
      capital: 'Algiers',
      region: 'Africa',
      population: 40400000,
      demonym: 'Algerian',
      area: 2381741,
    },
    {
      name: 'Andorra',
      capital: 'Andorra la Vella',
      region: 'Europe',
      population: 78014,
      area: 468,
    },
    {
      name: 'Angola',
      capital: 'Luanda',
      region: 'Africa',
      population: 25868000,
      area: 1246700,
    },
  ];
  extractedData: any = [{ jobID: this.jobID }, { extractedData: this.data }];

  onSelect(event) {
    console.log(event);
    console.log(event.addedFiles);
    this.selectedFile = event.addedFiles[0];
    this.files.push(...event.addedFiles);
    if (this.files.length > 0) {
      this.hasDisabled = false;
    }
  }

  onRemove(event) {
    this.files.splice(this.files.indexOf(event), 1);
    if (this.files.length == 0) {
      this.hasDisabled = true;
    }
  }

  onUpload() {
    this.uploading = true;
    this.hasUpload = false;
    this.extracting = false;
    this.hasExtract = false;
    const formData = new FormData();
    console.log(this.selectedFile);
    formData.append('document[file]', this.selectedFile);
    formData.append('document[name]', this.selectedFile.name);

    this.fileUpload.uploadFile(formData).subscribe((res) => {
      console.log(res);
      this.jobID = res.jobID;
    });
    setTimeout(() => {
      this.uploading = false;
      this.hasUpload = true;
      this.extracting = true;
      console.log(formData);
    }, 2000);

    var myVar = setInterval(myFunc.bind(this), 1000);
    let i = 0;
    function myFunc() {
      // keep hitting API until get response status =  'success'
      //   this.fileUpload.getData(jobID).subcribe(res =>  {
      //     this.data = res;
      //     if (res.status == 'success') {
      //       clearInterval(myVar);
      //     }
      //   }
      //   )
      // }
      // if (res.status == 'success')
      i++;
      if (i == 5) {
        this.hasExtract = true;
        this.extracting = false;
        clearInterval(myVar);
      }
    }
  }

  gotoView() {
    this.fileUpload.sendData(this.extractedData);
    this.router.navigate([`content/${this.jobID}`], {
      relativeTo: this.route,
    });
  }
}
