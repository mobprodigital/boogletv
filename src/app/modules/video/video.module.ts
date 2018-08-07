import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleVideoComponent } from './components/single-video/single-video.component';
import { AllVideoComponent } from './components/all-video/all-video.component';
import { VideoRoutingModule } from './video-routing/video-routing.module';
import { SharedModule } from '../shared/shared.module';
import { VideoSidebarComponent } from './components/video-sidebar/video-sidebar.component';
import { HttpModule } from '@angular/http';
import { AjaxService } from '../../services/ajax/ajax.service';
import { ImageSliderDirective } from '../../directives/image-slider/image-slider.directive';
import { YoutubePlayerModule } from 'ngx-youtube-player';

@NgModule({
  imports: [
    CommonModule,
    VideoRoutingModule,
    SharedModule,
    HttpModule,
    YoutubePlayerModule    
  ],
  declarations: [SingleVideoComponent, AllVideoComponent, VideoSidebarComponent, ImageSliderDirective],
  exports: [VideoRoutingModule, SharedModule, HttpModule, ImageSliderDirective],
  providers : [AjaxService]
})
export class VideoModule { }
