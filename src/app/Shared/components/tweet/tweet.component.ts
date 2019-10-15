import { Component, OnInit, Input } from '@angular/core';
import { ITweet } from '../../interfaces/ITweet';
import { DataRetrievalService } from 'src/app/Core/services/data-retrieval.service';
import { faUser, faReply, faTrash, faStar as faFullStar } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import * as moment from 'moment';


@Component({
    selector: 'app-tweet',
    templateUrl: './tweet.component.html',
    styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {
    faUser = faUser;
    faReply = faReply;
    faEmptyStar = faStar;
    faFullStar = faFullStar;
    faTrash = faTrash;

    showDefaultAvatar = false;
    tweetStarred = false;
    dateDiff: string;

    @Input() tweet: ITweet;

    constructor(private dataRetrievalService: DataRetrievalService) { }

    ngOnInit() {
        if (!this.tweet.avatarUrl) {
            this.showDefaultAvatar = true;
        }
        this.dateDiff = moment.duration(moment().diff(moment(this.tweet.postDate))).humanize();
    }

    toggleStar() {
        this.tweetStarred = !this.tweetStarred;
        // this.dataRetrievalService.toggleStar();
    }
}
