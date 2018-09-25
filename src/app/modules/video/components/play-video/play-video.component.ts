import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoModel } from '../../../../models/video.model';
import { VideoService } from '../../../../services/video/video.service';

declare var videojs: any;

@Component({
  selector: 'app-play-video',
  templateUrl: './play-video.component.html',
  styleUrls: ['./play-video.component.css']
})
export class PlayVideoComponent implements OnInit, AfterViewInit {

  private videoId: number;
  private videoPlayer: any;
  public videoModel: VideoModel;
  public mostLikedVideos: VideoModel[] = [];
  @ViewChild('imgSlider', { read: ElementRef }) imgSlider: ElementRef;

  constructor(private _activatedRoute: ActivatedRoute, private _videoService: VideoService) {
    this._videoService.getMostLikedVideosByCategoryId().then(vdo => this.mostLikedVideos = vdo).catch(err => alert(err));
  }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      let vid = params['id'];
      if (vid) {
        this.videoId = parseInt(vid);
        this._videoService.getVideoById(this.videoId).then(vdo => {
          this.videoModel = vdo;
        }).catch(err => {
          alert(err);
        });
      }
    })
  }

  ngAfterViewInit() {
    this.videoPlayer = videojs(document.getElementById('video-player'),
      {
        height: 450,
        controls: true,
        autoplay: true,
        preload: 'auto'
      });
  }

  public imgSlide(slideTo: string) {
    let slider: HTMLDivElement = this.imgSlider.nativeElement;
    let scrollLength: number = 0;
    if (slideTo == 'left') {
      scrollLength = slider.scrollLeft + slider.clientWidth;
      if (scrollLength >= slider.scrollWidth) {
        scrollLength = 0;
      }
    }
    else {
      scrollLength = slider.scrollLeft - slider.clientWidth;
      if (slider.scrollLeft <= 0) {
        scrollLength = slider.scrollWidth;
      }
    }
    slider.scroll({ left: scrollLength, behavior: 'smooth' });
  }

  public OnContextmenu(ev: MouseEvent): boolean {
    // ev.preventDefault();
    // ev.stopPropagation();
    return false;
  }

}
