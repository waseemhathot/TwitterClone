import { Component, OnInit } from '@angular/core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faHome, faSignInAlt, faSignOutAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-top-menu',
    templateUrl: './top-menu.component.html',
    styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
    faTwitter = faTwitter;
    faHome = faHome;
    faSignOut = faSignOutAlt;
    faSignIn = faSignInAlt;
    faRegister = faUserPlus;

    constructor() { }

    ngOnInit() {
    }

}
