import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataRetrievalService } from 'src/app/Core/services/data-retrieval.service';
import { ITweet } from 'src/app/Shared/interfaces/ITweet';
import { Subscription, Observable } from 'rxjs';
import { UserManagerService } from 'src/app/Login/services/user-manager.service';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, OnDestroy {
    tweetList: ITweet[] = [];
    tweetListSub: Subscription;
    tweetsLoaded = false;
    isUserLoggedIn$: Observable<boolean>;

    constructor(private dataRetrievalService: DataRetrievalService, userManagerService: UserManagerService) {
        this.tweetListSub = this.dataRetrievalService.tweetList$.subscribe(data => {
            this.tweetList = data;
            this.tweetsLoaded = true;
        });

        this.isUserLoggedIn$ = userManagerService.userData$.pipe(
            map(data => {
                if (data) {
                    return true;
                }
                return false;
            })
        );
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
