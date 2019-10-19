import { Directive, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appConfirmDialog]'
})
export class ConfirmDialogDirective {

  @Output('appConfirmDialog') execFunction = new EventEmitter();

  constructor(private button: ElementRef) { }

  @HostListener('click', ['$event'])
  clickEvent(event: Event) {

      if (confirm('Are you sure?')) {
          this.execFunction.emit();
      }
  }
}
