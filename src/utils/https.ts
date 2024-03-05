import axios, { AxiosInstance } from "axios";
import { Urls, domen } from "./urls";
import { getLocalStorage, setLocalStorage } from "./helpers";

interface Axios extends AxiosInstance {
    [key: string]: any;
}

const $authHost: Axios = axios.create({
    baseURL: `${domen}`,
});
$authHost.interceptors.request.use(
    (config) => {
        const accessToken = getLocalStorage("accessToken");

        if (config.headers) {
            if (Boolean(accessToken)) {
                config.headers.Authorization = `Bearer ${accessToken}`;
            }
        }
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

$authHost.interceptors.response.use(
    (response) => {
        return response;
    },
    async function (error) {
        const originalRequest = error.config;
        let refreshToken = getLocalStorage("refreshToken");

        if (error.response.status === 401 && !!refreshToken) {
            const resulttRes = await $authHost.post(Urls.auth.refresh, {
                refreshToken: refreshToken,
            });

            if (resulttRes.status === 201) {
                setLocalStorage("accessToken", resulttRes.data.accessToken);

                return $authHost(originalRequest);
            }
        }

        return Promise.reject(error);
    }
);
export { $authHost };
