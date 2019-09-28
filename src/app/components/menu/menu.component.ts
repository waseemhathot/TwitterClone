import { Component, OnInit } from '@angular/core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faHome, faSignInAlt, faSignOutAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    faTwitter = faTwitter;
    faHome = faHome;
    faSignOut = faSignOutAlt;
    faSignIn = faSignInAlt;
    faRegister = faUserPlus;

    constructor() { }

    ngOnInit() {
    }

}
