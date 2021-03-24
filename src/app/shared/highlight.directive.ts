import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  @Input() color: string;

  constructor(private _elementRef: ElementRef) {}

  ngOnInit() {
    this._setBackgroundClor(this.color);
  }

  @HostListener('mouseenter') mouseenter() {
    this._setBackgroundClor('grey');
  }

  @HostListener('mouseleave') mouseleave() {
    this._setBackgroundClor(null);
  }

  private _setBackgroundClor(color: string) {
    this._elementRef.nativeElement.style.backgroundColor = color;
  }
}
