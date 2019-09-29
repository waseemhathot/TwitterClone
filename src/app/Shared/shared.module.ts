import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TweetListComponent } from './components/tweet-list/tweet-list.component';
import { TweetComponent } from './components/tweet/tweet.component';

@NgModule({
    declarations: [TweetListComponent, TweetComponent],
    imports: [
        CommonModule,
    ],
    providers: [],
    bootstrap: [],
    exports: [TweetListComponent, TweetComponent]
})
export class SharedModule { }
