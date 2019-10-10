import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { TweetListComponent } from './components/tweet-list/tweet-list.component';
import { TweetComponent } from './components/tweet/tweet.component';
import { TextBoxComponent } from './components/text-box/text-box.component';

@NgModule({
    declarations: [TweetListComponent, TweetComponent, TextBoxComponent],
    imports: [
        CommonModule,
        FontAwesomeModule,
    ],
    providers: [],
    bootstrap: [],
    exports: [TweetListComponent, TweetComponent, TextBoxComponent, FontAwesomeModule,
    ]
})
export class SharedModule { }
