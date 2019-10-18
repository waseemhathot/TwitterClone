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
import { map, tap } from 'rxjs/operators';
import { User } from 'src/app/Login/interfaces/user';
import { Router } from '@angular/router';


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
    userData$: Observable<User>;
    userId: string;

    constructor(private userManagerService: UserManagerService, private router: Router) {
        this.isUserLoggedIn$ = userManagerService.isUserLoggedIn$;
        this.userData$ = this.userManagerService.userData$.pipe(
            map(data => {
                if (data) {
                    return data.user;
                }
                return null;
            }),
        );
        this.userData$.subscribe(v => {
            if (v) {
                console.log('here');
                console.log(v.id);
                this.userId = v.id;
            }
        });
    }

    ngOnInit() { }

    openTweetWindow() { }

    logout() {
        this.userManagerService.logout();
    }

    navigateToProfilePage() {
        this.router.navigate(['profile/' + this.userId]);
    }
}
