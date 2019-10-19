import { Component, OnInit, ViewChildren, AfterViewInit, ElementRef, Renderer2, QueryList } from '@angular/core';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

    faGlobe = faGlobeAmericas;

    @ViewChildren('languageButton') languageButtons: QueryList<ElementRef>;

    constructor(private renderer: Renderer2, private translate: TranslateService) { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.addEventListenersToButtons(this.languageButtons.toArray());
    }

    addEventListenersToButtons(buttons: ElementRef[]) {
        for (const button of buttons) {
            button.nativeElement.addEventListener('click', (event: Event) => {
                this.removeActiveClassFromButtons(buttons);
                this.renderer.addClass(event.target, 'active');
                this.translate.use(button.nativeElement.value);
            });
        }
    }

    removeActiveClassFromButtons(buttons: ElementRef[]) {
        for (const button of buttons) {
            this.renderer.removeClass(button.nativeElement, 'active');
        }
    }
}
