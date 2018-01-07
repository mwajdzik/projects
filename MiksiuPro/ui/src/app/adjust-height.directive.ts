import {Directive, ElementRef, Input, OnInit} from '@angular/core';

import {ResizeSensor} from 'css-element-queries';

@Directive({
  selector: '[appAdjustHeight]'
})
export class AdjustHeightDirective implements OnInit {

  @Input('appAdjustHeight') watchedElementId;

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    const element = document.getElementById(this.watchedElementId);
    const elementRef = this.elementRef;

    new ResizeSensor(element, function () {
      elementRef.nativeElement.style.height = (element.clientHeight - 36) + 'px';
    });
  }
}
