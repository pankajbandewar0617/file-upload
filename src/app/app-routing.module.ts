import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/file-upload',
  },
  {
    path: 'file-upload',
    component: FileUploadComponent,
  },
  {
    path: 'content',
    component: ContentComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/file-upload',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
