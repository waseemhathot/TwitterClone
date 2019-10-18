export interface User {
    userHandle: string;
    avatarUrl: string;
    id: string;
    email: string;
    lastLoginDate: string;
    registrationDate: string;
}

export interface UserCredentials {
    email: string;
    password: string;
}
