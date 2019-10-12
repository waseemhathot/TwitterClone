import { Component, OnInit, Input } from '@angular/core';
import { ITweet } from '../../interfaces/ITweet';
import { DataRetrievalService } from 'src/app/Core/services/data-retrieval.service';
import { IUser } from '../../interfaces/IUser';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-tweet',
    templateUrl: './tweet.component.html',
    styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {
    showDefaultAvatar = false;
    faUser = faUser;

    @Input() tweet: ITweet;

    constructor(private dataRetrievalService: DataRetrievalService) { }

    ngOnInit() {
        if (this.tweet.avatarUrl === '') {
            this.showDefaultAvatar = true;
        }
    }

}
