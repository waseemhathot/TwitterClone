import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TweetListComponent } from './components/tweet-list/tweet-list.component';
import { TweetComponent } from './components/tweet/tweet.component';
import { TextBoxComponent } from './components/text-box/text-box.component';
import { ModalComponent } from './components/modal/modal.component';

import { AutoGrowDirective } from './directives/auto-grow.directive';
import { ConfirmDialogDirective } from './directives/confirm-dialog.directive';
import { LoadingAnimationComponent } from './components/loading-animation/loading-animation.component';

@NgModule({
    declarations: [TweetListComponent,
        TweetComponent,
        TextBoxComponent,
        AutoGrowDirective,
        ModalComponent,
        ConfirmDialogDirective,
        LoadingAnimationComponent,
    ],
    imports: [
        CommonModule,
        FontAwesomeModule,
        FormsModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
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
        LoadingAnimationComponent,
        TranslateModule,
    ]
})
export class SharedModule { }


export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}