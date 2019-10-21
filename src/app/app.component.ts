import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export interface UserStyle {
    language: string;
    theme: string;
}


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private translate: TranslateService) {
        translate.setDefaultLang('en');

        const userData = JSON.parse(localStorage.getItem('userData'));
        if (!userData) {
            localStorage.setItem('userData', '{}');
        }

        const languageString = localStorage.getItem('language');
        if (!languageString || languageString === '') {

            translate.use(translate.defaultLang);
            localStorage.setItem('language', this.translate.currentLang);
        } else {
            translate.use(languageString);
        }
    }
}
