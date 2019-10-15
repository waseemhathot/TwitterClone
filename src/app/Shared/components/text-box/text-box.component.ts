import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { DataRetrievalService } from 'src/app/Core/services/data-retrieval.service';

const MAX_CHARACTERS_NUM = 240;
@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css']
})
export class TextBoxComponent implements OnInit, AfterViewInit {

  faUser = faUser;
  characterCount = 0;
  textArea: HTMLTextAreaElement;
  @ViewChild('textArea', { static: false }) textAreaRef: ElementRef;
  @ViewChild('tweetButton', { static: false }) teweetButtonRef: ElementRef;

  constructor(private dataRetrievalService: DataRetrievalService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.textArea = this.textAreaRef.nativeElement as HTMLTextAreaElement;
    this.updateCharacterCount();
  }

  postTweet(): void {
    this.dataRetrievalService.postTweet(this.textArea.value);
    this.dataRetrievalService.updateTweetsFromServer();
    this.textArea.value = '';
    this.characterCount = 0;
  }

  updateCharacterCount() {
    this.characterCount = this.textArea.value.length;
    if (this.characterCount > MAX_CHARACTERS_NUM || this.characterCount === 0) {
      this.teweetButtonRef.nativeElement.disabled = true;
    } else {
      this.teweetButtonRef.nativeElement.disabled = false;
    }
  }
}
