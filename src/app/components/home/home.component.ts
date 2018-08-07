import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Video } from "../../models/video.model";
import { VideoCategory } from '../../models/video-category.model';
import { VideoService } from "../../modules/video/services/video.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [VideoService]
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('imgSlider', { read: ElementRef }) imgSlider: ElementRef;
  @ViewChild('bannerBtnWrap', { read: ElementRef }) bannerBtnWrap: ElementRef;


  selectedSlide: string = '';

  LatestVideos: Video[] = [];
 
  videoCategoryList: VideoCategory[];
  selectedCatTab: string = 'all';
  constructor(private _videoService: VideoService, private _router: Router, ) {
    this.feedVideos();

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  public showSlide(targetSlideIndex: string) {
    this.selectedSlide = this.LatestVideos[targetSlideIndex].id;
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

  /**
    * Navigate to play video page and play a video 
    * @param videoId video id
    */
  public playVideo(videoId: string) {
    this._router.navigate(['video/play', videoId]);
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

    this._videoService.getAllVideos().then(vidList => {
      this.LatestVideos = vidList;
      this.selectedSlide = vidList[0].id;
    });

    this._videoService.getAllCategories().then(catList => { 
      this.videoCategoryList = catList; 
      console.log(catList);
    });
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
    this.selectedCatTab = catId;
    if(catId == 'all'){
      this.LatestVideos.forEach(lv => lv.hidden = false);
    }
    else{
      this.LatestVideos.forEach(lv => lv.hidden = lv.categories.find(lvc => lvc.id == catId) ? false : true);
    }
  }

}
