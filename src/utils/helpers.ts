
type keyLocalStroge = "accessToken" | "refreshToken";
export const getLocalStorage = (str: keyLocalStroge) => {
    return localStorage.getItem(str);
};

export const setLocalStorage = (key: keyLocalStroge, value: string) => {
    return localStorage.setItem(key, value);
};
