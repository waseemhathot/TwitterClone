import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap, map, shareReplay } from 'rxjs/operators';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { UserData } from 'src/app/Login/interfaces/user-data';

enum UserStatus {
    LoggedIn = 'LoggedIn',
    LoggedOut = 'LoggedOut'
}

@Injectable()
export class UserManagerService {
    private userToken: string;
    private apiUrl = 'http://localhost:3000/api';

    private _userStatus: BehaviorSubject<UserStatus> = new BehaviorSubject(UserStatus.LoggedOut);
    public readonly isUserLoggedIn$ = this._userStatus.asObservable().pipe(
        map(value => value === UserStatus.LoggedIn),
        shareReplay(1),
    );

    constructor(private http: HttpClient) { }

    login(userEmail: string, userPassword: string) {
        return this.http.post(this.apiUrl + '/auth/login', { email: userEmail, password: userPassword }).pipe(
            map(value => value as UserData),
        )
        .toPromise()
        .then(data => {
            localStorage.setItem('userData', JSON.stringify(data));
            this._userStatus.next(UserStatus.LoggedIn);
        });
    }

    logout() {

    }
}
