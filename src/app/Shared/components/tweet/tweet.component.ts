import { Component, OnInit, Input } from '@angular/core';
import { ITweet } from '../../interfaces/ITweet';
import { DataRetrievalService } from 'src/app/Core/services/data-retrieval.service';
import { faUser, faReply, faTrash, faStar as faFullStar } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import * as moment from 'moment';
import { Router } from '@angular/router';


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

    showTrashOption = false;
    showReplyOption = false;
    showDefaultAvatar: boolean;
    dateDiff: string;

    @Input() tweet: ITweet;

    constructor(private dataRetrievalService: DataRetrievalService, private router: Router) { }

    ngOnInit() {

        if (!this.tweet.avatarUrl) {
            this.showDefaultAvatar = true;
        }

        this.dateDiff = moment.duration(moment().diff(moment(new Date(this.tweet.postDate)).format())).humanize();
    }

    async toggleStar() {

        const data = await this.dataRetrievalService.toggleStar(this.tweet.id);
        this.tweet.starredByMe = data.starredByMe;
        this.tweet.stars = data.stars;
    }

    async deleteTweet(): Promise<void> {

        await this.dataRetrievalService.deleteTweet(this.tweet.id);
        this.dataRetrievalService.updateTweetsFromServer();
    }

    navigateToProfile() {
        this.router.navigate([`/profile/${this.tweet.userId}`]);
    }
}
