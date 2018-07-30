import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appImageSlider]'
})
export class ImageSliderDirective implements OnInit {

  @Input() imageList: any[];

  private sliderElement: HTMLDivElement;

  constructor(private _eleRef: ElementRef) {
    this.sliderElement = this._eleRef.nativeElement;
  }

  ngOnInit() {

  }

}
