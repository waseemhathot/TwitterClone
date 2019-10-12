import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { TweetListComponent } from './components/tweet-list/tweet-list.component';
import { TweetComponent } from './components/tweet/tweet.component';
import { TextBoxComponent } from './components/text-box/text-box.component';
import { AutoGrowDirective } from './directives/auto-grow.directive';

@NgModule({
    declarations: [TweetListComponent, TweetComponent, TextBoxComponent, AutoGrowDirective],
    imports: [
        CommonModule,
        FontAwesomeModule,
    ],
    providers: [],
    bootstrap: [],
    exports: [
        TweetListComponent,
        TweetComponent,
        TextBoxComponent,
        FontAwesomeModule,
        AutoGrowDirective,
    ]
})
export class SharedModule { }
