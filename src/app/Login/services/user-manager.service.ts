import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { UserData } from 'src/app/Login/interfaces/user-data';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { DataRetrievalService } from 'src/app/Core/services/data-retrieval.service';


@Injectable()
export class UserManagerService {

    private _userData: Subject<UserData> = new BehaviorSubject<UserData>(null);
    public readonly userData$: Observable<UserData> = this._userData.asObservable().pipe(
        shareReplay(1),
    );

    constructor(private http: HttpClient, private router: Router, private dataRetrievalSerivce: DataRetrievalService) {

        const userDataString = localStorage.getItem('userData');
        const userData = JSON.parse(userDataString);
        if (userData && userDataString !== '{}') {
            this._userData.next(userData as UserData);
        }
    }

    async login(userEmail: string, userPassword: string): Promise<void> {
        const data = await this.http.post(environment.apiUrl + '/auth/login', { email: userEmail, password: userPassword }).pipe(
            map(value => value as UserData),
        ).toPromise();

        localStorage.setItem('userData', JSON.stringify(data));
        this._userData.next(data);
        this.dataRetrievalSerivce.updateTweetsFromServer();
        this.router.navigate(['home']);
    }

    logout() {

        localStorage.setItem('userData', '{}');
        this._userData.next(null);
        this.dataRetrievalSerivce.updateTweetsFromServer();
        this.router.navigate(['login']);
    }

    async register(userData: any): Promise<void> {

        const data = await this.http.post(environment.apiUrl + '/auth/register', userData).pipe(
            map(value => value as UserData),
        ).toPromise();
        this._userData.next(data);
        localStorage.setItem('userData', JSON.stringify(data));
        this.router.navigate(['home']);
    }

    isUserLoggedin(): boolean {
    }
}
