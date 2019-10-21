import { Injectable, OnDestroy } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserManagerService } from 'src/app/Login/services/user-manager.service';
import { Subscription } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FormGuard implements CanActivate, OnDestroy {

    sub: Subscription;

    constructor(private userManagerService: UserManagerService, private router: Router) { }

    canActivate() {
        let isUserLoggedIn = false;
        this.sub = this.userManagerService.userData$.subscribe(v => {
            if (v) {
                isUserLoggedIn = true;
                return;
            }
            return;
        });

        if (isUserLoggedIn) {
            this.router.navigate(['/home']);
            return false;
        }
        return true;
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
