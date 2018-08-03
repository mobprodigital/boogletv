import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ImageSlider, ImageSliderImage } from '../../../../directives/image-slider/interface/image-slider.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { VideoService } from '../../services/video.service';
import * as screenfull from 'screenfull'

@Component({
  selector: 'app-single-video',
  templateUrl: './single-video.component.html',
  styleUrls: ['./single-video.component.css'],
  providers: [VideoService]
})
export class SingleVideoComponent implements OnInit {

  @ViewChild('videoPlayer', { read: ElementRef }) videoPlayerControlRef: ElementRef;
  videoPlayer: HTMLMediaElement;
  videoTimer: any;
  @ViewChild('seekBar', { read: ElementRef }) seekBarControlRef: ElementRef;
  seekBar: HTMLDivElement;


  videoCurrentTime: string | number = '00:00:00';
  videoTotalTime: string | number = '00:00:00';

  seekBarPercent: number = 0;

  relatedVideoSliderImages: ImageSlider = {
    ImageSlideList: []
  };

  constructor(
    private _videoService: VideoService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
  ) {
    window.scroll({ top: 0, behavior: 'smooth' })
    this.relatedVideoSliderImages.ImageSlideList = Array.from({ length: 12 }, (_, i: number) => {
      let singleImage: ImageSliderImage = {
        href: 'video/play/videoid',
        imagePath: `assets/images/home/movie${(Math.floor(Math.random() * (1 - 3)) + 3)}.jpg`,
        metaData: [
          { 'faClassName': 'fa-eye', text: '20k' },
          { 'faClassName': 'fa-thumbs-up', text: '200' },
          { 'faClassName': 'fa-thumbs-down', text: '20' },
        ],
        title: 'Title ' + i
      }

      return singleImage
    });
  }

  ngOnInit() {
    this.videoPlayer = <HTMLMediaElement>this.videoPlayerControlRef.nativeElement;
    this.videoPlayer.src = '/assets/videodata/Movie/Thor Ragnarok/video/Thor Ragnarok.mp4';
    this.videoTotalTime = this.videoPlayer.duration ? this.secToTime(this.videoPlayer.duration) : '00:00:00';
    this.seekBar = <HTMLDivElement>this.seekBarControlRef.nativeElement;

    this._activatedRoute.params.forEach(p => {

    });

    this.videoPlayer.addEventListener('contextmenu', (ev: MouseEvent) => ev.preventDefault());

    this.videoPlayer.ontimeupdate = () => {
      this.seekBarPercent = (this.videoPlayer.currentTime / this.videoPlayer.duration) * 100;
      this.videoCurrentTime = this.secToTime(this.videoPlayer.currentTime);
      this.videoTotalTime = this.secToTime(this.videoPlayer.duration);
    }


  }

  public seekVideo(ev: MouseEvent) {
    this.seekBarPercent = (ev.offsetX / this.seekBar.offsetWidth) * 100;
    this.videoPlayer.currentTime = (this.videoPlayer.duration / 100) * this.seekBarPercent;
  }

  /**
   * Convert seconds to hh/mm/ss format
   * @param duration seconds
   */
  public secToTime(duration: number): string | number {
    if (duration == NaN) {
      return '00:00:00';
    }
    let sec_num = parseInt(duration.toString(), 10);
    let hours: string | number = Math.floor(sec_num / 3600);
    let minutes: string | number = Math.floor((sec_num - (hours * 3600)) / 60);
    let seconds: string | number = sec_num - (hours * 3600) - (minutes * 60);

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }

    return hours + ":" + minutes + ":" + seconds;

  }

  fullScreen: boolean = false

  toggleFullScreen() {
    screenfull.toggle(this.videoPlayer);
  }

  shareVideo() {

    if (navigator['share']) {
      navigator['share']({
        title: 'Thor',
        text: 'Thor moview',
        url: location.href,
      });
    }
  }

}
