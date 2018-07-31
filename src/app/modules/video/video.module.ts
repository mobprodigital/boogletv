import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleVideoComponent } from './components/single-video/single-video.component';
import { AllVideoComponent } from './components/all-video/all-video.component';
import { VideoRoutingModule } from './video-routing/video-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    VideoRoutingModule,
    SharedModule
  ],
  declarations: [SingleVideoComponent, AllVideoComponent],
  exports: [VideoRoutingModule, SharedModule]
})
export class VideoModule { }
