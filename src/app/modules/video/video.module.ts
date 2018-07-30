import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleVideoComponent } from './components/single-video/single-video.component';
import { AllVideoComponent } from './components/all-video/all-video.component';
import { VideoRoutingModule } from './video-routing/video-routing.module';

@NgModule({
  imports: [
    CommonModule,
    VideoRoutingModule
  ],
  declarations: [SingleVideoComponent, AllVideoComponent],
  exports : [VideoRoutingModule]
})
export class VideoModule { }
