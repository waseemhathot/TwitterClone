import { Component, OnInit, OnDestroy } from '@angular/core';
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
import { Observable, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { User } from 'src/app/Login/interfaces/user';
import { Router } from '@angular/router';


@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {
    faTwitter = faTwitter;
    faHome = faHome;
    faSignOut = faSignOutAlt;
    faSignIn = faSignInAlt;
    faRegister = faUserPlus;
    faFeather = faFeatherAlt;
    faUser = faUser;

    isUserLoggedIn$: Observable<boolean>;
    user: User;
    userSub: Subscription;

    constructor(private userManagerService: UserManagerService, private router: Router) {
        this.isUserLoggedIn$ = userManagerService.userData$.pipe(
            map(data => {
                if (data) {
                    return true;
                }
                return false;
            })
        );

        this.userSub = this.userManagerService.userData$.pipe(
            map(data => {
                if (data) {
                    return data.user;
                }
                return null;
            }),
        ).subscribe(user => this.user = user);
    }

    ngOnInit() { }

    openTweetWindow() { }

    logout() {
        this.userManagerService.logout();
    }

    navigateToProfilePage() {
        if (this.user) {
            this.router.navigate(['profile/' + this.user.id]);
        }
    }

    ngOnDestroy() {
        this.userSub.unsubscribe();
    }
}
