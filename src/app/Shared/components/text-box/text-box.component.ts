import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { DataRetrievalService } from 'src/app/Core/services/data-retrieval.service';

const MAX_CHARACTERS_NUM = 240;

@Component({
    selector: 'app-text-box',
    templateUrl: './text-box.component.html',
    styleUrls: ['./text-box.component.css']
})
export class TextBoxComponent implements OnInit {

    faUser = faUser;
    characterCount = 0;
    textArea: HTMLTextAreaElement;
    container: HTMLDivElement;
    showOperationBar = true;
    tweetPosted = true;
    textAreaValue = '';
    maxCharactersAllowed: number = MAX_CHARACTERS_NUM;
    avatarUrl: string;

    constructor(private dataRetrievalService: DataRetrievalService) {}

    ngOnInit() {
    }

    postTweet(): void {
        this.showOperationBar = false;
        this.tweetPosted = false;

        this.dataRetrievalService.postTweet(this.textAreaValue).then(_ => {

            setTimeout(() => { // delay for smooth animation
                this.showOperationBar = true;
                this.tweetPosted = true;
                this.dataRetrievalService.updateTweetsFromServer();
                this.textAreaValue = '';
                this.updateCharacterCount();
            }, 1000);

        });
    }

    updateCharacterCount() {
        this.characterCount = this.textAreaValue.length;
    }
}
