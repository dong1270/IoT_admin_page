
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

// 쿠키 값 설정
export const setCookie = (key, data, option) => {
    return cookies.set(key, data, option);
}

// 쿠키 값 가져오기
export const getCookie = (key) => {
    return cookies.get(key);
}

// 쿠키 값 삭제
export const removeCookie = (key) => {
    return cookies.remove(key, {path: '/'});
}