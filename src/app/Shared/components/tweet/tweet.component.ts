import { Component, OnInit, Input } from '@angular/core';
import { ITweet } from '../../interfaces/ITweet';
import { DataRetrievalService } from 'src/app/Core/services/data-retrieval.service';
import { faUser, faReply, faTrash, faStar as faFullStar } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';


@Component({
    selector: 'app-tweet',
    templateUrl: './tweet.component.html',
    styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {
    showDefaultAvatar = false;

    faUser = faUser;
    faReply = faReply;
    faEmptyStar = faStar;
    faFullStar = faFullStar;
    faTrash = faTrash;

    tweetStarred = false;

    @Input() tweet: ITweet;

    constructor(private dataRetrievalService: DataRetrievalService) { }

    ngOnInit() {
        if (this.tweet.avatarUrl === '') {
            this.showDefaultAvatar = true;
        }
    }

    toggleStar() {
        this.tweetStarred = !this.tweetStarred;
    }

}
