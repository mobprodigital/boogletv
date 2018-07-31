import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AllVideoComponent } from '../components/all-video/all-video.component';
import { SingleVideoComponent } from '../components/single-video/single-video.component';
import { NotFoundComponent } from '../../shared/components/not-found/not-found.component';

let videoRoutes: Routes = [
  {
    path: "play/:id",
    component: SingleVideoComponent
  },
  {
    path: "category/:id",
    component: AllVideoComponent
  },
  {
    path: '',
    component: AllVideoComponent,
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
