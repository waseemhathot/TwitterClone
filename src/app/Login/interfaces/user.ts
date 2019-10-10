export interface User {
    userHandle: string;
    avatarUrl: string;
}

export interface UserCredentials extends User {
    email: string;
    password: string;
}
