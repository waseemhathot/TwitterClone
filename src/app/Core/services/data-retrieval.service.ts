import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITweet } from 'src/app/Shared/interfaces/ITweet';
import { map, startWith, switchMap, shareReplay } from 'rxjs/operators';
import { Subject, Observable, interval, merge } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable()
export class DataRetrievalService {

    private _tweetList: Subject<ITweet[]> = new Subject<ITweet[]>();
    private tweetListOnUpdate$: Observable<ITweet[]> = this._tweetList.asObservable();

    private tweetListOnInterval$: Observable<ITweet[]> = interval(10000).pipe(
        startWith(-1),
        switchMap(_ => this.getTweetsFromServer()),
        shareReplay(1),
    );

    public readonly tweetList$: Observable<ITweet[]> = merge(this.tweetListOnInterval$, this.tweetListOnUpdate$);

    constructor(private http: HttpClient) { }


    getTweetsFromServer(): Observable<ITweet[]> {
        return this.http.get(environment.apiUrl + '/tweets')
            .pipe(
                map(json => json as ITweet[]),
            );
    }

    async updateTweetsFromServer(): Promise<void> {
        return await this.http.get(environment.apiUrl + '/tweets')
            .pipe(
                map(json => json as ITweet[]),
            )
            .toPromise()
            .then((data) => {
                this._tweetList.next(data);
            })
            .catch(error => Promise.reject(error));
    }

    async postTweet(text: string): Promise<any> {
        return await this.http.post(environment.apiUrl + '/tweets', { text }).toPromise().catch(err => console.log(err));
    }

    // async getUserInfoById(id: string): Promise<IUser> {
    //     return await this.http.get(apiUrl + '/members/' + id)
    //         .pipe(
    //             map(json => json as IUser),
    //         )
    //         .toPromise()
    //         .catch(error => Promise.reject(error));
    // }
}
