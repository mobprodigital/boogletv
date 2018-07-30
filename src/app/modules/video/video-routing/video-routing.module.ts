import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AllVideoComponent } from '../components/all-video/all-video.component';
import { SingleVideoComponent } from '../components/single-video/single-video.component';
import { NotFoundComponent } from '../../../components/not-found/not-found.component';

let videoRoutes: Routes = [
  {
    path: "video",
    component: AllVideoComponent,
  },
  {
    path: "video/play/:id",
    component: SingleVideoComponent
  },
  {
    path: "video/category/:id",
    component: AllVideoComponent
  },
  {
    path: '',
    component: NotFoundComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent,
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(videoRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class VideoRoutingModule { }
