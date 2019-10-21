import { Component, OnInit, Input, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { ITweet } from '../../interfaces/ITweet';
import { DataRetrievalService } from 'src/app/Core/services/data-retrieval.service';
import { faUser, faReply, faTrash, faStar as faFullStar } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { UserManagerService } from 'src/app/Login/services/user-manager.service';
import { Subscription, BehaviorSubject, Observable } from 'rxjs';
import { ModalComponent } from '../modal/modal.component';
import { TranslateService } from '@ngx-translate/core';


@Component({
    selector: 'app-tweet',
    templateUrl: './tweet.component.html',
    styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit, OnDestroy, AfterViewInit {
    faUser = faUser;
    faReply = faReply;
    faEmptyStar = faStar;
    faFullStar = faFullStar;
    faTrash = faTrash;

    showTrashOption = false;
    showReplyOption = false;
    showDefaultAvatar: boolean;
    dateDiff: string;
    userDataSub: Subscription;
    modalRef: ModalComponent;

    @Input() tweet: ITweet;
    @ViewChild('modal', { static: false }) modal: ModalComponent;

    // tslint:disable-next-line
    constructor(private dataRetrievalService: DataRetrievalService, private userManagerService: UserManagerService, private router: Router, private translate: TranslateService) { }

    ngAfterViewInit() {
        this.modalRef = this.modal;
    }

    ngOnInit() {

        if (!this.tweet.avatarUrl) {
            this.showDefaultAvatar = true;
        }

        this.userDataSub = this.userManagerService.userData$.pipe().subscribe(data => {
            if (data) {
                this.showReplyOption = true;

                if (data.user.id === this.tweet.userId) {
                    this.showTrashOption = true;
                }
            } else {
                this.showTrashOption = false;
                this.showReplyOption = false;
            }
        });

        this.dateDiff = moment(new Date(this.tweet.postDate), 'YYYYMMDDSS').locale(this.translate.currentLang).fromNow();
    }

    async toggleStar() {
        try {
            const data = await this.dataRetrievalService.toggleStar(this.tweet.id);
            this.tweet.starredByMe = data.starredByMe;
            this.tweet.stars = data.stars;
        } catch (err) {
            if (err.status === 401) {
                this.router.navigate(['/login']);
            }
        }
    }

    async deleteTweet(): Promise<void> {
        await this.dataRetrievalService.deleteTweet(this.tweet.id);
        this.dataRetrievalService.updateTweetsFromServer();
    }

    navigateToProfile() {
        this.router.navigate([`/profile/${this.tweet.userId}`]);
    }

    openModal() {
        this.modalRef.open();
    }

    ngOnDestroy() {
        this.userDataSub.unsubscribe();
    }
}
