import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap, map, shareReplay } from 'rxjs/operators';

enum UserStatus {
    LoggedIn = 'LoggedIn',
    LoggedOut = 'LoggedOut'
}

@Injectable()
export class UserManagerService {
    private userStatus = UserStatus.LoggedOut;

    private _userStatus: BehaviorSubject<UserStatus> = new BehaviorSubject(UserStatus.LoggedOut);
    public readonly isUserLoggedIn$ = this._userStatus.asObservable().pipe(
        map(value => value === UserStatus.LoggedIn),
        shareReplay(1),
    );

    constructor() { }
}
