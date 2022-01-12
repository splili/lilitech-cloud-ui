import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-button',
  template: `
    <button [disabled]="disabled">{{text}}</button>
  `
})
export class ButtonComponent {
  @Input() text: string | undefined;
  @Input()
  disabled: boolean = false;
}