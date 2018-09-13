import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ImageSlider, ImageSliderImage } from '../../../../directives/image-slider/interface/image-slider.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { VideoService } from '../../../../services/video/video.service';
import * as screenfull from 'screenfull'
import { VideoModel } from '../../../../models/video.model';
import { VideoSource } from '../../../../enums/videosource.enum';

@Component({
  selector: 'app-single-video',
  templateUrl: './single-video.component.html',
  styleUrls: ['./single-video.component.css'],
  providers: [VideoService]
})
export class SingleVideoComponent implements OnInit, AfterViewInit {

  @ViewChild('videoPlayer', { read: ElementRef }) videoPlayerControlRef: ElementRef;
  @ViewChild('imgSlider', { read: ElementRef }) imgSlider: ElementRef;
  videoPlayer: HTMLMediaElement;
  videoTimer: any;
  @ViewChild('seekBar', { read: ElementRef }) seekBarControlRef: ElementRef;
  seekBar: HTMLDivElement;
  videoCurrentTime: string | number = '00:00:00';
  videoTotalTime: string | number = '00:00:00';
  videoBuffered: number;
  seekBarPercent: number = 0;
  isWaiting: boolean = false;
  currentVideo: VideoModel = new VideoModel();

  isAdPlayed: boolean = false;
  isAdvideoPlaying: boolean = false;
  adVideos: string[] = [
    '/assets/videodata/ads/ad1.mp4',
    '/assets/videodata/ads/ad2.mp4',
    '/assets/videodata/ads/ad3.mp4',
  ]


  mostLikedVideos: VideoModel[] = [];



  constructor(private _videoService: VideoService, private _activatedRoute: ActivatedRoute, private _router: Router) {
    this._videoService.getMostLikedVideos().then(vidList => this.mostLikedVideos = vidList);
  }

  ngAfterViewInit() {
    this.seekBar = <HTMLDivElement>this.seekBarControlRef.nativeElement;
    this.videoPlayer = <HTMLMediaElement>this.videoPlayerControlRef.nativeElement;

    

    this._activatedRoute.params.subscribe((params) => {
      let videoId = params['id'];
      this._videoService.getVideoById(videoId).then(vid => {

        this.currentVideo = vid;

        this.videoPlayer.src = '';
        this.isAdPlayed = false;

        this.setVideoData();
        window.scroll({ top: 180, behavior: 'smooth' });
      });
    })
  }
  ngOnInit() {


  }

  public videoEnded() {
    if (this.isAdPlayed) {

      this.videoPlayer.muted = false;
      this.isAdvideoPlaying = false;
      this.isAdPlayed = true;
      this.videoPlayer.load();

    }
    else {

      this.isAdvideoPlaying = false;
      this.isAdPlayed = true;
      this.videoPlayer.muted = false;
      this.videoPlayer.src = this.currentVideo.src;
      this.videoPlayer.load();
      this.play();

    }
  }

  public contextMenu(ev: MouseEvent) {
    ev.preventDefault();
  }




  private async setVideoData() {
    if (this.currentVideo.videoSource == VideoSource.File) {
      this.videoPlayer.src = this.isAdPlayed ? this.currentVideo.src : this.adVideos[(Math.floor(Math.random() * 3) + 0)];
      if (!this.isAdPlayed) {
        this.isAdvideoPlaying = true;
        this.videoPlayer.muted = true;
      }
      this.videoPlayer.load();
      await this.play();
      this.videoTotalTime = this.currentVideo.duration;

    }
  }

  public seekVideo(ev: MouseEvent) {
    ev.preventDefault();
    ev.stopPropagation();
    if (!this.isAdvideoPlaying) {
      this.seekBarPercent = (ev.offsetX / this.seekBar.offsetWidth) * 100;
      this.videoPlayer.currentTime = (this.videoPlayer.duration / 100) * this.seekBarPercent;
    }
  }


  public secToTime(duration: number): string | number {
    if (!duration) {
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

  public toggleFullScreen() {
    screenfull.toggle(this.videoPlayer);
  }

  public shareVideo() {
    if (navigator['share']) {
      navigator['share']({
        title: this.currentVideo.title,
        text: this.currentVideo.description,
        url: location.href,
      });
    }
  }

  public play() {
    // this.videoPlayer.load();
    return this.videoPlayer.play();
  }


  public pause() {
    this.videoPlayer.pause();
  }

  public onProgress() {

    var duration = this.videoPlayer.duration;
    if (duration > 0) {
      let videoBufferedLngth = this.videoPlayer.buffered.length;
      console.log('videoBufferedLngth', videoBufferedLngth);

      for (var i = 0; i < videoBufferedLngth; i++) {
        if (this.videoPlayer.buffered.start(videoBufferedLngth - 1 - i) < this.videoPlayer.currentTime) {
          this.videoBuffered = (this.videoPlayer.buffered.end(videoBufferedLngth - 1 - i) / duration) * 100;
          break;
        }
      }
    }
  }
  public onTimeUpdate() {
    this.seekBarPercent = (this.videoPlayer.currentTime / this.videoPlayer.duration) * 100;
    this.videoCurrentTime = this.secToTime(this.videoPlayer.currentTime);
    this.videoTotalTime = this.secToTime(this.videoPlayer.duration);
  }
  public onWaiting() {
    this.isWaiting = true;
  }
  public onPlaying() {
    this.play();
    this.isWaiting = false;
    console.log('now playing');
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


  public playVideo(ev: MouseEvent, videoId: string) {
    ev.preventDefault();
    ev.stopPropagation();
    this._router.navigate(['video/play', videoId]);
  }

}
