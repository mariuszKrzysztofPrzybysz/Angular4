import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appZippyFormat]'
})
export class ZippyFormatDirective {
  constructor(private _el: ElementRef) { }

  @HostListener('blur') onBlur() {
    let value: string = this._el.nativeElement.value;
    if (value.length != 9) {
      return;
    }
    let firstThree = value.substr(2, 3);
    let nextTree = value.substr(3, 3);
    let lastTree = value.substr(6);

    this._el.nativeElement.value = `(${firstThree}) ${nextTree} - ${lastTree}`;
  }

  @HostListener('focus') onFocus() {
    this._el.nativeElement.value = '';
  }
}
