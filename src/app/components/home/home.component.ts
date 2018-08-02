import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Video } from "../../models/video.model";
import { VideoCategory } from '../../models/video-category.model';
import { ImageSlider, ImageSliderImage } from '../../directives/image-slider/interface/image-slider.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('imgSlider', { read: ElementRef }) imgSlider: ElementRef;
  @ViewChild('bannerBtnWrap', { read: ElementRef }) bannerBtnWrap: ElementRef;


  selectedSlide: string = '';

  LatestVideos: Video[] = [];
  MostLikedVideos: Video[] = [];
  MostViewedVideos: Video[] = [];
  MostPopulerVideos: Video[] = [];
  videoCategoryList: VideoCategory[];
  activeCategoryTab: string = 'all';
  constructor() {
    this.feedVideos();
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  public showSlide(targetSlideIndex: string) {
    this.selectedSlide = 'vid' + targetSlideIndex;
    this.scrollBannerBtnBar(parseInt(targetSlideIndex))
  }
  bannerSwipeLeft(slideindex: number): void {
    let targetSlideIndex: number = 0;
    if (slideindex >= (this.LatestVideos.length - 1)) {
      // this.showSlide('vid0');
      targetSlideIndex = 0;
    }
    else {
      // this.showSlide('vid' + (slideindex + 1));
      targetSlideIndex = slideindex + 1;
    }

    this.showSlide(targetSlideIndex.toString());
    // this.scrollBannerBtnBar(targetSlideIndex);

  }

  bannerSwipeRight(slideindex: number): void {
    let targetSlideIndex: number = 0;
    if (slideindex <= 0) {
      // this.showSlide('vid' + (this.LatestVideos.length - 1));
      targetSlideIndex = this.LatestVideos.length - 1;
    }
    else {
      // this.showSlide('vid' + (slideindex - 1));
      targetSlideIndex = slideindex - 1;
    }
    this.showSlide(targetSlideIndex.toString());
    // this.scrollBannerBtnBar(targetSlideIndex);
  }

  private async scrollBannerBtnBar(targetSlideIndex: number) {
    let bannerBtnWrapDiv: HTMLDivElement = this.bannerBtnWrap.nativeElement;
    let bannerBtnDiv = <HTMLDivElement>bannerBtnWrapDiv.firstElementChild;
    let sliderBtnWidth: number = bannerBtnDiv && bannerBtnDiv.offsetWidth || 300;
    let scrollLength: number = sliderBtnWidth * targetSlideIndex;
    bannerBtnWrapDiv.scroll({ left: scrollLength, behavior: 'smooth' });
  }

  /**
   * Temp function
   */
  private feedVideos() {

    this.LatestVideos = Array.from({ length: 12 }, (_, i: number) => {

      if (i === 0) {
        this.selectedSlide = 'vid' + i;
      }

      let vdo = new Video();
      vdo.Id = 'vid' + i;
      vdo.Title = 'Video Title ' + i;
      vdo.ViewsCount = 10;
      vdo.LikesCount = 20;
      vdo.CreateDate = new Date();
      vdo.Thumbnails.Orignal = 'assets/images/home/movie' + ((Math.floor(Math.random() * (1 - 3)) + 3)) + '.jpg';
      return vdo;
    });


    this.videoCategoryList = Array.from({ length: 3 }, (_, i: number) => {
      let cat = new VideoCategory();
      cat.Id = 'catId' + i.toString();
      cat.Name = 'cat ' + i;
      return cat;
    })

    this.MostLikedVideos = Array.from({ length: 12 }, (_, i: number) => {
      if (i === 0) {
        this.selectedSlide = 'vid' + i;
      }
      let vdo = new Video();
      vdo.Id = 'vid' + i;
      vdo.Title = 'Video Title ' + i;
      vdo.ViewsCount = i * 10;
      vdo.LikesCount = i * 20;
      vdo.CreateDate = new Date();
      vdo.Categories = [this.videoCategoryList[i]];
      vdo.Thumbnails.Orignal = `assets/images/home/movie${(Math.floor(Math.random() * (1 - 3)) + 3)}.jpg`;
      return vdo;
    })

    /*  this.relatedVideoSliderImages.ImageSlideList = Array.from({ length: 12 }, (_, i: number) => {
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
     }); */

  }




  imgSlide(slideTo: string) {
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

  public showCat(ev: MouseEvent, catId: string) {
    ev.preventDefault();
    ev.stopPropagation();
    alert(catId);
  }

}
