
type keyLocalStorage = "accessToken" | "refreshToken" 
export const getLocalStorage = (str: keyLocalStorage) => {
    return localStorage.getItem(str)
}

export const setLocalStorage = (key: keyLocalStorage, value: string) => {
    return localStorage.setItem(key, value)
}