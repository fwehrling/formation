import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]',
})
export class RainbowDirective {
  colors = [
    'darksalmon',
    'hotpink',
    'lightskyblue',
    'goldenrod',
    'peachpuff',
    'mediumspringgreen',
    'cornflowerblue',
    'blanchedalmond',
    'lightslategrey',
  ];

  @HostBinding('style.color') color: string;
  @HostBinding('style.border-color') boderColor: string;

  constructor() {}

  @HostListener('keydown') newColor() {
    const colorPick = Math.floor(Math.random() * this.colors.length - 1);
    this.color = this.boderColor = this.colors[colorPick];
  }
}
