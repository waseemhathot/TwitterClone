import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, Renderer2 } from '@angular/core';
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
    container: HTMLDivElement;
    showOperationBar = true;

    @ViewChild('textArea', { static: false }) textAreaRef: ElementRef;
    @ViewChild('tweetButton', { static: false }) tweetButtonRef: ElementRef;
    @ViewChild('contentContainer', { static: false }) containerRef: ElementRef;

    constructor(private dataRetrievalService: DataRetrievalService, private renderer: Renderer2) {}

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.textArea = this.textAreaRef.nativeElement as HTMLTextAreaElement;
        this.container = this.containerRef.nativeElement as HTMLDivElement;
        this.updateCharacterCount();
    }

    postTweet(): void {
        this.renderer.removeClass(this.container, '--loading-animation');
        this.renderer.addClass(this.container, '--infinite-loading-animation');
        this.showOperationBar = false;

        this.dataRetrievalService.postTweet(this.textArea.value).then(_ => {

            this.renderer.removeClass(this.container, '--infinite-loading-animation');
            this.renderer.addClass(this.container, '--loading-animation');
            this.showOperationBar = true;
            this.dataRetrievalService.updateTweetsFromServer();
            this.textArea.value = '';
            this.updateCharacterCount();
        });
    }

    updateCharacterCount() {
        this.characterCount = this.textArea.value.length;
        if (this.characterCount > MAX_CHARACTERS_NUM || this.characterCount === 0) {
            this.tweetButtonRef.nativeElement.disabled = true;
        } else {
            this.tweetButtonRef.nativeElement.disabled = false;
        }
    }
}
