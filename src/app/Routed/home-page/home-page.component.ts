import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataRetrievalService } from 'src/app/Core/services/data-retrieval.service';
import { ITweet } from 'src/app/Shared/interfaces/ITweet';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, OnDestroy {
    tweetList: ITweet[] = [];
    tweetListSub: Subscription;

    constructor(private dataRetrievalService: DataRetrievalService) {
        this.tweetListSub = this.dataRetrievalService.tweetList$.subscribe(data => {
            this.tweetList = data;
        });
    }

    ngOnInit() {

    }

    getTweets(): void {
        this.dataRetrievalService.updateTweetsFromServer();
    }

    ngOnDestroy() {
        this.tweetListSub.unsubscribe();
    }

}
