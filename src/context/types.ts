import { ReactElement } from "react";

export interface ITokens {
    accessToken: string | null;
    refreshToken: string | null;
}

export interface IUser {
    id: number;
    password: string;
    role: string;
    status: string;
    username: string;
}

export interface IUserData {
    user: IUser;
    tokens: ITokens;
}
export interface IUserContext {
    userData: IUserData;
    setTokens: (key: string, value: string) => void;
}

export interface UserProviderI {
    children: ReactElement;
}
