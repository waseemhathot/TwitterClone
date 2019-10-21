import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  faTimes = faTimes;

  modalElement: HTMLElement;
  modalBackgroundElement: HTMLElement;
  displayModal = false;

  constructor() { }

  ngOnInit() {

  }

  open() {
    this.displayModal = true;
  }

  close() {
    this.displayModal = false;
  }

}
