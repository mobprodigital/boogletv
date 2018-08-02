import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ImageSlider, ImageSliderImage } from '../../../../directives/image-slider/interface/image-slider.interface';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { VideoService } from '../../services/video.service';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-single-video',
  templateUrl: './single-video.component.html',
  styleUrls: ['./single-video.component.css'],
  providers: [VideoService]
})
export class SingleVideoComponent implements OnInit {

  @ViewChild('videoPlayer', { read: ElementRef }) videoPlayerControlRef: ElementRef;
  videoPlayer: HTMLMediaElement;

  @ViewChild('seekBar', { read: ElementRef }) seekBarControlRef: ElementRef;
  seekBar: HTMLDivElement;

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
    this.videoPlayer.src = 'https://www.w3schools.com/tags/mov_bbb.mp4';

    this.seekBar = <HTMLDivElement>this.seekBarControlRef.nativeElement;

    this._activatedRoute.params.forEach(p => {
      console.log(p);
    });

    this.videoPlayer.addEventListener('contextmenu', (ev: MouseEvent) => ev.preventDefault());
  }

  public seekVideo(ev: MouseEvent) {
    this.seekBarPercent = (ev.offsetX / this.seekBar.offsetWidth) * 100;
    this.videoPlayer.currentTime = (this.videoPlayer.duration / 100) * this.seekBarPercent;
  }



}
