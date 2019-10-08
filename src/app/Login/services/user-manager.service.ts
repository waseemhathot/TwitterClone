import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { map, shareReplay, startWith } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { UserData } from 'src/app/Login/interfaces/user-data';
import { environment } from 'src/environments/environment';

enum UserStatus {
    LoggedIn = 'LoggedIn',
    LoggedOut = 'LoggedOut'
}

@Injectable()
export class UserManagerService {

    private _userStatus: Subject<UserStatus> = new Subject();
    public readonly isUserLoggedIn$: Observable<boolean> = this._userStatus.asObservable().pipe(
        startWith(UserStatus.LoggedOut),
        map(value => value === UserStatus.LoggedIn),
        shareReplay(1),
    );

    constructor(private http: HttpClient) { }

    login(userEmail: string, userPassword: string): Promise<boolean> {
        return this.http.post(environment.apiUrl + '/auth/login', { email: userEmail, password: userPassword }).pipe(
            map(value => value as UserData),
        )
        .toPromise()
        .then(data => {
            localStorage.setItem('userData', JSON.stringify(data));
            this._userStatus.next(UserStatus.LoggedIn);
            return true;
        })
        .catch(() => false);
    }

    logout() {
        localStorage.setItem('userData', '');
        this._userStatus.next(UserStatus.LoggedOut);
    }

    register() {

    }
}
