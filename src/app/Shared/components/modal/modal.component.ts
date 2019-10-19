import { Component, ViewChild, OnInit, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, AfterViewInit {

  faTimes = faTimes;

  @ViewChild('modal', {static: false}) modal: ElementRef;
  @ViewChild('modalBackground', {static: false}) modalBackground: ElementRef;

  modalElement: HTMLElement;
  modalBackgroundElement: HTMLElement;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.modalElement = this.modal.nativeElement;
  }

  open() {
    this.renderer.removeClass(this.modalElement, '--hidden');
    this.renderer.addClass(this.modalElement, '--displayed');
  }

  close() {
    this.renderer.removeClass(this.modalElement, '--displayed');
    this.renderer.addClass(this.modalElement, '--hidden');
  }

}
