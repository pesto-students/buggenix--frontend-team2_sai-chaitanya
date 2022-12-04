import axios, { axiosPrivate } from "./axios";


const refresh = async () => {
    const response = await axios.get('auth/refresh', {
        withCredentials: true
    });
    return response.data.accessToken;
}
axiosPrivate.interceptors.request.use(
    config => {
        if (!config.headers['Authorization']) {
            const  access_token  = localStorage.getItem("access_token")
            config.headers['Authorization'] = `Bearer ${access_token}`;
        }
        return config;
    }, (error) => Promise.reject(error)
);

 axiosPrivate.interceptors.response.use(
    response => response,
    async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest?.sent) {
            prevRequest.sent = true;
            const newAccessToken = await refresh();
            prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
            localStorage.setItem("access_token",newAccessToken)
            return axiosPrivate(prevRequest);
        }
        return Promise.reject(error);
    }
);

export default axiosPrivate;