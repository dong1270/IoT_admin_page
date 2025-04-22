import '../../App.css';
import '../../Style/Login.css';
import {useState, useEffect} from "react";
import sha256 from 'crypto-js/sha256';
import { HmacSHA512 } from 'crypto-js';
import Base64 from 'crypto-js/enc-base64';
import { setCookie } from '../../Component/Cookies';
import axios from 'axios';

function Login() {
    const [id, setId] = useState({}); 
    const [pw, setPw] = useState({});
    const dotEnv = process.env;

    // 화면 이동
    const navigate = () => {
        window.location.href = "";
    }

    // 로그인 api 요청
    const loginAction = (info) => {
        axios.post(dotEnv.REACT_APP_API_URL + '/auth', info)
        .then((res) => {
            if(res.data.msg === 'success' && res.data.userRole === "admin")
            {
                // 쿠키에 정보 저장
                setCookie("user-uid", res.data.userUid, {path: '/'});
                setCookie("user-id", res.data.userId, {path: '/'});
                setCookie("user-name", res.data.userName, {path: '/'});
                setCookie("user-role", res.data.userRole, {path: '/'});

                setCookie("state", true, {path: '/'});
                navigate();
            }
            else {
                alert("로그인 정보가 맞지않습니다.");
            }
        })
        .catch((error) => {
            console.log(error)
            alert("네트워크에 문제가 있습니다.");
        });
    }

    // 엔터키 인식
    const enterKeyHandler = (e) => {
        if(e.key === 'Enter') auth();
    }

    // 로그인 + 비밀번호 해시 암호화 함수 
    const auth = () => {
        if(id.value === "" || pw.value === "")  alert("아이디 혹은 비밀번호가 공백입니다.");
        else{
            const passwd = pw.value;
            const hashPw = sha256(dotEnv.REACT_APP_NONCE + passwd);
            const hmacPw = Base64.stringify(
                HmacSHA512(dotEnv.REACT_APP_PATH + hashPw, dotEnv.REACT_APP_PRIVATE_KEY)
            );
            
            const loginOjt = {
                "userId": id.value,
                "userPw": hmacPw
            }
            loginAction(loginOjt);
        }
    };

    useEffect(() => {
        setId(document.getElementById('user-id'));
        setPw(document.getElementById('user-pw'));
    },[id]);

    return (
    <div className="main">
        <div className="logo-zone">
            <h1 className="body-logo">Home IoT</h1>
        </div>
        <div className="login-zone">
            <div className="login-frame">
                <div className="contents-box">
                    <div className="login-contents"> 
                        <div className='login-title'>Admin Page</div>
                    </div>
                    <div className="login-contents">
                        <input className="login-input" type="text" placeholder="아이디" id='user-id'></input>
                    </div>
                    <div className="login-contents">
                        <input className="login-input" type="password" placeholder="비밀번호" id='user-pw' onKeyDown={enterKeyHandler}></input>
                    </div>
                    <div className="login-contents login-btn">
                        <button className="login-submit" onClick={auth}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Login;
