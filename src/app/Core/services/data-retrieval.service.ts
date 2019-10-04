import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITweet } from 'src/app/Shared/interfaces/ITweet';
import { map } from 'rxjs/operators';
import { IUser } from 'src/app/Shared/interfaces/IUser';

const apiUrl = 'http://localhost:3000/api';

@Injectable()
export class DataRetrievalService {

    constructor(private http: HttpClient) { }

    async getTweetsFromServer(): Promise<ITweet[]> {
        return await this.http.get(apiUrl + '/tweets')
            .pipe(
                map(json => json as ITweet[]),
            )
            .toPromise()
            .catch(error => Promise.reject(error));
    }

    async getUserInfoById(id: string): Promise<IUser> {
        return await this.http.get(apiUrl + '/members/' + id)
            .pipe(
                map(json => json as IUser),
            )
            .toPromise()
            .catch(error => Promise.reject(error));
    }
}
