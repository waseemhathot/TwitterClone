import { Component, OnInit, Input } from '@angular/core';
import { ITweet } from '../../interfaces/ITweet';

@Component({
    selector: 'app-tweet-list',
    templateUrl: './tweet-list.component.html',
    styleUrls: ['./tweet-list.component.css']
})
export class TweetListComponent implements OnInit {

    @Input() tweetList: ITweet[];

    constructor() { }

    ngOnInit() {
    }

    trackById(index: number, item: ITweet) {
        return item.tweetId;
    }

}
