import { Component, OnInit } from '@angular/core';
import { ITweet } from 'src/app/Shared/interfaces/ITweet';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { DataRetrievalService } from 'src/app/Core/services/data-retrieval.service';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import * as moment from 'moment';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-profile-page',
    templateUrl: './profile-page.component.html',
    styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
    faUser = faUser;
    tweetList: ITweet[] = [];
    tweetListSub: Subscription;
    userId: string;
    showDefaultAvatar = true;
    registrationDate: string;
    lastLoginDate: string;
    userHandle: string;
    avatarUrl: string;
    tweetsLoaded = false;
    userLoaded = false;

    constructor(private route: ActivatedRoute, private dataRetrievalService: DataRetrievalService, private translate: TranslateService) {

        this.userId = this.route.snapshot.paramMap.get('id');

        this.dataRetrievalService.getTweetsFromServerById(this.userId).then(data => {
            this.tweetList = data;
            this.tweetsLoaded = true;
            this.userLoaded = true;
        });

        this.dataRetrievalService.getUserFromServerById(this.userId).then(data => {
            this.userHandle = data.userHandle;
            this.avatarUrl = data.avatarUrl;
            this.registrationDate = moment(new Date(data.registrationDate)).format('LLL');
            this.lastLoginDate = moment(new Date(data.lastLoginDate), 'YYYYMMDDSS').locale(translate.currentLang).fromNow();

            if (data.avatarUrl !== '') {
                this.avatarUrl = data.avatarUrl;
                this.showDefaultAvatar = false;
            }
        });
    }

    ngOnInit() { }


}
