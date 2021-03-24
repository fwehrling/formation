import { Directive } from '@angular/core';

@Directive({
  selector: 'footer:not(.test)',
})
export class DoNothingDirective {
  constructor() {
    console.log('je ne sers à rien');
  }
}
