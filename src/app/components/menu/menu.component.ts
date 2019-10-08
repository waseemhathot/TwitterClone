import { Component, OnInit } from '@angular/core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import {
    faHome,
    faSignInAlt,
    faSignOutAlt,
    faUserPlus,
    faFeatherAlt,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { UserManagerService } from 'src/app/Login/services/user-manager.service';
import { Observable } from 'rxjs';


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
    faFeather = faFeatherAlt;
    faUser = faUser;

    isUserLoggedIn$: Observable<boolean>;

    constructor(private userManagerService: UserManagerService) {
        this.isUserLoggedIn$ = userManagerService.isUserLoggedIn$;
    }

    ngOnInit() {
    }

    openTweetWindow() { }

    logout() {
        this.userManagerService.logout();
    }
}
