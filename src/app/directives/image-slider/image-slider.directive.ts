import { Directive, Input, ElementRef, OnInit, TemplateRef, ViewContainerRef, HostListener, Renderer2 } from '@angular/core';
import { ImageSlider } from './interface/image-slider.interface';


@Directive({
  selector: '[appImageSlider]'
})
export class ImageSliderDirective implements OnInit {
  // imageSliderData: ImageSlider;
  @Input('appImageSlider') imageSliderData: ImageSlider;


  private sliderElement: HTMLDivElement;

  constructor(
    private _eleRef: ElementRef,
    private _rend: Renderer2
  ) {
    this.sliderElement = this._eleRef.nativeElement;
  }

  ngOnInit() {
    if (this.imageSliderData.ImageSlideList && this.imageSliderData.ImageSlideList.length > 0) {
      this.sliderElement.classList.add('imgs-container');

      let sliderHtml = `<div class="imgs-wrap">`;
      this.imageSliderData.ImageSlideList.forEach(img => {
        let metaDataHtml = ``;
        if (img.metaData.length > 0) {
          metaDataHtml += '<ul>';
          img.metaData.forEach(md => {
            metaDataHtml += `<li><i class="fas ${md.faClassName}" aria-hidden="true"></i> ${md.text}</li>`;
          })
          metaDataHtml += '</ul>';
        }
        sliderHtml += `<article class="imgs-single"> 
            <div class="imgs-image" style="background-image:url(${img.imagePath}">
            <i class="fas fa-play play-btn"></i>
          </div>
          <div class="imgs-captions">
            <div class="imgs-title">
              <a class="post-link" href="${img.href}">${img.title}</a>
            </div>
            <div class="imgs-meta-data">
              ${metaDataHtml}
            </div>
          </div>
          </article>`;
      })

      sliderHtml += ` </div><!-- imgs-wrap -->
      <span class="imgs-control-left">
      <i (click)="imgSlide('right')" class="fas fa-arrow-left" aria-hidden="true"></i>
    </span>
    <span class="imgs-control-right">
      <i (click)="imgSlide('left')" class="fas fa-arrow-right" aria-hidden="true"></i>
    </span>
          `;

      // this.sliderElement.innerHTML = sliderHtml;
      this._rend.setProperty(this.sliderElement, 'innerHTML', sliderHtml);
    }
  }


  @HostListener('swipeleft') onSwipeLeft() {
    this.imgSlide('left');

  }
  @HostListener('swiperight') onSwipeRight() {
    this.imgSlide('right');
  }

  private imgSlide(slideTo: string) {
    let slider: HTMLDivElement = <HTMLDivElement>this.sliderElement.firstChild;
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


}
