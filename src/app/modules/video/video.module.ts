import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { SingleVideoComponent } from './components/single-video/single-video.component';
import { AllVideoComponent } from './components/all-video/all-video.component';
import { VideoRoutingModule } from './video-routing/video-routing.module';
import { SharedModule } from '../shared/shared.module';
import { VideoSidebarComponent } from './components/video-sidebar/video-sidebar.component';
import { HttpModule } from '@angular/http';
import { AjaxService } from '../../services/ajax/ajax.service';
import { ImageSliderDirective } from '../../directives/image-slider/image-slider.directive';
import { VideoByCategoryComponent } from './components/video-by-category/video-by-category.component';
import { PlayVideoComponent } from './components/play-video/play-video.component';

@NgModule({
  imports: [
    CommonModule,
    VideoRoutingModule,
    SharedModule,
    HttpModule,
    FormsModule
  ],
  declarations: [SingleVideoComponent, AllVideoComponent, VideoSidebarComponent, ImageSliderDirective, VideoByCategoryComponent, PlayVideoComponent],
  exports: [VideoRoutingModule, SharedModule, HttpModule, ImageSliderDirective],
  providers: [AjaxService]
})
export class VideoModule { }
