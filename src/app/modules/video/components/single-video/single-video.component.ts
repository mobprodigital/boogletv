import { Component, OnInit } from '@angular/core';
import { ImageSlider, ImageSliderImage } from '../../../../directives/image-slider/interface/image-slider.interface';

@Component({
  selector: 'app-single-video',
  templateUrl: './single-video.component.html',
  styleUrls: ['./single-video.component.css']
})
export class SingleVideoComponent implements OnInit {

  relatedVideoSliderImages: ImageSlider = {
    ImageSlideList: []
  };

  constructor() {
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

  }



}
