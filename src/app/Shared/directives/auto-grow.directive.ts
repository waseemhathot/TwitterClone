import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[appAutoGrow]'
})
export class AutoGrowDirective implements OnInit {

    constructor(private element: ElementRef) { }
    @Input('appAutoGrow') minHeight: number;

    @HostListener('input', ['$event.target'])
    @HostListener('cut', ['$event.target'])
    @HostListener('paste', ['$event.target'])
    @HostListener('change', ['$event.target'])

    autoSize() {
        const element = this.element.nativeElement;
        if (element.scrollHeight > this.minHeight) {
            this.element.nativeElement.style.height = this.minHeight + 'px';
            element.style.height = (element.scrollHeight) + 'px';
        }
    }
    ngOnInit() {
        this.element.nativeElement.style.height = this.minHeight + 'px';
    }
}
