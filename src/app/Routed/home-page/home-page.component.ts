import { Component, OnInit } from '@angular/core';
import { DataRetrievalService } from 'src/app/Core/services/data-retrieval.service';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
    tweetList = [];

    constructor(private dataRetrievalService: DataRetrievalService) {
        this.dataRetrievalService.getTweetsFromServer().then(data => {
            console.log(data);
            this.tweetList = data;
        });
    }

    ngOnInit() {
    }

}
