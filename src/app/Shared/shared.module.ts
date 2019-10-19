import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { TweetListComponent } from './components/tweet-list/tweet-list.component';
import { TweetComponent } from './components/tweet/tweet.component';
import { TextBoxComponent } from './components/text-box/text-box.component';
import { ModalComponent } from './components/modal/modal.component';

import { AutoGrowDirective } from './directives/auto-grow.directive';
import { ConfirmDialogDirective } from './directives/confirm-dialog.directive';

@NgModule({
    declarations: [TweetListComponent,
        TweetComponent,
        TextBoxComponent,
        AutoGrowDirective,
        ModalComponent,
        ConfirmDialogDirective,
    ],
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
        ModalComponent,
    ]
})
export class SharedModule { }
