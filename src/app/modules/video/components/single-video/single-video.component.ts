import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ImageSlider, ImageSliderImage } from '../../../../directives/image-slider/interface/image-slider.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { VideoService } from '../../services/video.service';
import * as screenfull from 'screenfull'
import { Video } from '../../../../models/video.model';

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

  currentVideo: Video = new Video();


  relatedVideoSliderImages: ImageSlider = {
    ImageSlideList: []
  };

  constructor(
    private _videoService: VideoService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
  ) {
    // window.scroll({ top: 0, behavior: 'smooth' });

    this._videoService.getAllVideos().then(allVideos => {
      
      this.relatedVideoSliderImages.ImageSlideList = allVideos.map(singleVideo => {
        let singleImage: ImageSliderImage = {
          href: 'video/play/' + singleVideo.id,
          imagePath: singleVideo.thumbnails.medium,
          metaData: [
            { faClassName: 'fa-eye', text: singleVideo.viewsCount.toString() },
            { faClassName: 'fa-thumbs-up', text: singleVideo.likesCount.toString() },
            { faClassName: 'fa-thumbs-down', text: singleVideo.dislikesCount.toString() },
          ],
          title: singleVideo.title
        };
        return singleImage;
      });

  
    })

  }

  ngOnInit() {

    this.seekBar = <HTMLDivElement>this.seekBarControlRef.nativeElement;
    this.videoPlayer = <HTMLMediaElement>this.videoPlayerControlRef.nativeElement;

    let vidId = this._activatedRoute.snapshot.paramMap.get('id');



    this._videoService.getVideoById(vidId).then(vid => { this.currentVideo = vid; this.setVideoData(); });

    this.videoPlayer.addEventListener('contextmenu', (ev: MouseEvent) => ev.preventDefault());

    this.videoPlayer.ontimeupdate = () => {
      this.seekBarPercent = (this.videoPlayer.currentTime / this.videoPlayer.duration) * 100;
      this.videoCurrentTime = this.secToTime(this.videoPlayer.currentTime);
      this.videoTotalTime = this.secToTime(this.videoPlayer.duration);
    }


  }

  private setVideoData() {
    this.videoPlayer.src = this.currentVideo.src;
    this.videoTotalTime = this.currentVideo.duration;
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

  public toggleFullScreen() {
    screenfull.toggle(this.videoPlayer);
  }

  public shareVideo() {

    if (navigator['share']) {
      navigator['share']({
        title: 'Thor',
        text: 'Thor moview',
        url: location.href,
      });
    }
  }

}
