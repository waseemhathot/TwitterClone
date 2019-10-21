import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import {
    faHome,
    faSignInAlt,
    faSignOutAlt,
    faUserPlus,
    faFeatherAlt,
    faUser,
    faAdjust,
} from '@fortawesome/free-solid-svg-icons';
import { UserManagerService } from 'src/app/Login/services/user-manager.service';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/Login/interfaces/user';
import { Router } from '@angular/router';
import { ModalComponent } from 'src/app/Shared/components/modal/modal.component';
import { ThemeService } from 'src/app/Core/services/theme.service';


@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy, AfterViewInit {
    faTwitter = faTwitter;
    faHome = faHome;
    faSignOut = faSignOutAlt;
    faSignIn = faSignInAlt;
    faRegister = faUserPlus;
    faFeather = faFeatherAlt;
    faUser = faUser;
    faAdjust = faAdjust;

    isUserLoggedIn$: Observable<boolean>;
    user: User;
    userSub: Subscription;
    modalRef: ModalComponent;

    @ViewChild('modal', { static: false }) modal: ModalComponent;

    constructor(private userManagerService: UserManagerService, private router: Router, private themeService: ThemeService) {

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

    ngAfterViewInit() {
        this.modalRef = this.modal;
    }

    openTweetWindow() { }

    logout() {
        this.userManagerService.logout();
    }

    navigateToProfilePage() {
        if (this.user) {
            this.router.navigate(['profile/' + this.user.id]);
        }
    }

    openModal() {
        this.modalRef.open();
    }

    toggleTheme() {
        this.themeService.toggleTheme();
    }

    ngOnDestroy() {
        this.userSub.unsubscribe();
    }
}
