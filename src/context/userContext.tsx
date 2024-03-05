import { createContext, useState, FC, ReactElement } from "react";

const accessToken = localStorage.getItem("accessToken");
const refreshToken = localStorage.getItem("refreshToken");

export interface ITokens {
    accessToken: string | null;
    refreshToken: string | null;
}

 interface IUser {
    id: number;
    password: string;
    role: string;
    status: string;
    username: string;
}

 interface IUserData {
    user: IUser;
    tokens: ITokens;
}
 interface IUserContext {
    userData: IUserData;
    setTokens: (key: string, value: string) => void;
}

 interface UserProviderI {
    children: ReactElement;
}

const UserContextInitials = {
    user: {} as IUser,
    tokens: {
        accessToken,
        refreshToken,
    },
};

export const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider: FC<UserProviderI> = ({ children }) => {
    const [userData, setUserData] = useState(UserContextInitials);

    function setTokens(accessToken: string, refreshToken: string) {
        setUserData({ ...userData, tokens: { accessToken, refreshToken } });
    }

    return (
        <UserContext.Provider value={{ userData, setTokens }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
