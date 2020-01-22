import { Directive, HostListener, ElementRef, Input } from '@angular/core';
import { FormatInputPathObject } from 'path';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  constructor(private _el: ElementRef) { }

  // @HostListener('focus') onFocus() {
  //   console.log('onFocus');
  // }

  @Input('appInputFormat') format;
  @HostListener('blur') onBlur() {
    let value: string = this._el.nativeElement.value;

    if (this.format == 'lowercase') {
      this._el.nativeElement.value = value.toLowerCase();
    }
    else {
      this._el.nativeElement.value = value.toUpperCase();
    }
  }
}
