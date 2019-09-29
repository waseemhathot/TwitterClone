import { IUser } from './IUser';

export interface ITweet {
    user: IUser;
    tweetContent: string;
    tweetDate: Date;
    tweetStars: number;
    tweetId: string;
}
