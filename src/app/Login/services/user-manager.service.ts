import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { map, shareReplay, startWith } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { UserData } from 'src/app/Login/interfaces/user-data';
import { environment } from 'src/environments/environment';
import { UserCredentials, User } from '../interfaces/user';
import { Router } from '@angular/router';
import { DataRetrievalService } from 'src/app/Core/services/data-retrieval.service';

enum UserStatus {
    LoggedIn = 'LoggedIn',
    LoggedOut = 'LoggedOut'
}

@Injectable()
export class UserManagerService {

    private _userStatus: Subject<UserStatus> = new Subject<UserStatus>();
    public readonly isUserLoggedIn$: Observable<boolean> = this._userStatus.asObservable().pipe(
        startWith(UserStatus.LoggedOut),
        map(value => value === UserStatus.LoggedIn),
        shareReplay(1),
    );

    private _userData: Subject<UserData> = new Subject<UserData>();
    public readonly userData$: Observable<UserData> = this._userData.asObservable().pipe(
        startWith(null),
        shareReplay(1),
    );

    constructor(private http: HttpClient, private router: Router, private dataRetrievalSerivce: DataRetrievalService) { }

    async login(userEmail: string, userPassword: string): Promise<void> {
        const data = await this.http.post(environment.apiUrl + '/auth/login', { email: userEmail, password: userPassword }).pipe(
            map(value => value as UserData),
        ).toPromise();

        localStorage.setItem('userData', JSON.stringify(data));
        this._userData.next(data);
        this._userStatus.next(UserStatus.LoggedIn);
        this.dataRetrievalSerivce.updateTweetsFromServer();
        this.router.navigate(['home']);
    }

    logout() {

        localStorage.setItem('userData', '{}');
        this._userData.next(null);
        this._userStatus.next(UserStatus.LoggedOut);
        this.dataRetrievalSerivce.updateTweetsFromServer();
        this.router.navigate(['login']);
    }

    async register(userData: any): Promise<void> {

        const data = await this.http.post(environment.apiUrl + '/auth/register', userData).toPromise();
        this._userStatus.next(UserStatus.LoggedIn);
        localStorage.setItem('userData', JSON.stringify(data));
        this.router.navigate(['home']);
    }
}
