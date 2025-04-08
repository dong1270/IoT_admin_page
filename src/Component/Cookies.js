
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setCookie = (key, data, option) => {
    return cookies.set(key, data, option);
}

export const getCookie = (key) => {
    return cookies.get(key);
}

export const removeCookie = (key) => {
    return cookies.remove(key, {path: '/'});
}