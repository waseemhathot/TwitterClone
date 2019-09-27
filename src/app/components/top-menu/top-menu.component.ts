import { Component, OnInit } from '@angular/core';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-top-menu',
    templateUrl: './top-menu.component.html',
    styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
    faTwitter = faTwitterSquare;

    constructor() { }

    ngOnInit() {
    }

}
