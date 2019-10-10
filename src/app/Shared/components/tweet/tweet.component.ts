import { Component, OnInit, Input } from '@angular/core';
import { ITweet } from '../../interfaces/ITweet';
import { DataRetrievalService } from 'src/app/Core/services/data-retrieval.service';
import { IUser } from '../../interfaces/IUser';

@Component({
    selector: 'app-tweet',
    templateUrl: './tweet.component.html',
    styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {

    @Input() tweet: ITweet;
    user: IUser = {
        avatarUrl: '',
        id: '',
        userHandle: '',
    };

    constructor(private dataRetrievalService: DataRetrievalService) { }

    ngOnInit() {
        this.dataRetrievalService.getUserInfoById(this.tweet.userId)
            .then(data => {
                this.user.avatarUrl = data.avatarUrl;
                this.user.id = data.id;
                this.user.userHandle = data.userHandle;
            });
    }

}
