import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Video } from "../../models/video.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('imgSlider', { read: ElementRef }) imgSlider: ElementRef;

  selectedSlide: string = '';

  LatestVideos: Video[] = [];
  MostLikedVideos: Video[] = [];
  MostViewedVideos: Video[] = [];
  MostPopulerVideos: Video[] = [];

  constructor() {
    this.feedVideos();
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  public showSlide(VidId: string) {
    this.selectedSlide = VidId;
  }

  /**
   * Temp function
   */
  private feedVideos(): void {

    this.LatestVideos = Array.from({ length: 3 }, (_, i: number) => {

      if (i === 0) {
        this.selectedSlide = 'vid' + i;
      }

      let vdo = new Video();
      vdo.Id = 'vid' + i;
      vdo.Title = 'Video Title ' + i;
      vdo.ViewsCount = 10;
      vdo.LikesCount = 20;
      vdo.CreateDate = new Date();
      vdo.Thumbnails.Orignal = 'assets/images/home/movie' + (i + 1) + '.jpg';
      return vdo;
    });

    this.MostLikedVideos = Array.from({ length: 12 }, (_, i: number) => {
      if (i === 0) {
        this.selectedSlide = 'vid' + i;
      }
      let vdo = new Video();
      vdo.Id = 'vid' + i;
      vdo.Title = 'Video Title ' + i;
      vdo.ViewsCount = 10;
      vdo.LikesCount = 20;
      vdo.CreateDate = new Date();
      vdo.Thumbnails.Orignal = 'assets/images/home/movie1.jpg';
      return vdo;
    })
  }

  bannerSwipeLeft(slideindex: number): void {
    if (slideindex >= (this.LatestVideos.length - 1)) {
      this.showSlide('vid0');
    }
    else {
      this.showSlide('vid' + (slideindex + 1));
    }
  }

  bannerSwipeRight(slideindex: number): void {
    if (slideindex <= 0) {
      this.showSlide('vid' + (this.LatestVideos.length - 1));
    }
    else {
      this.showSlide('vid' + (slideindex - 1));
    }
  }


  imgSlide(slideTo: string) {
    let slider: HTMLDivElement = this.imgSlider.nativeElement;
    let scrollLength: number = 0;
    if (slideTo == 'left') {
      scrollLength = slider.scrollLeft + slider.clientWidth;
      // slider.scroll({ left: (slider.scrollLeft + slider.clientWidth), behavior: 'smooth' });
    }
    else {
      scrollLength = slider.scrollLeft - slider.clientWidth
    }

    /* let scrollTimer = setTimeout(() => {

    }) */

    // slider.scrollLeft = scrollLength;


    slider.scroll({ left: scrollLength, behavior: 'smooth' });
  }

}
