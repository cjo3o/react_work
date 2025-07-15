import {useEffect, useState} from "react";
import "./App.css";
import axios from "axios";

axios.defaults.withCredentials = true;

function App() {
    const [loginStatus, setLoginStatus] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:4003/api/me").then((result) => {
            setLoginStatus(result?.data.status);
            setUser(result?.data.user);
        });
    }, []);

    const reqLogin = async () => {
        try {
            const result = await axios.post("http://localhost:4003/api/login", {
                id: "admin",
                password: "admin!!!!",
            });
            console.log("result", result); // data.msg:''
            if (result?.data.flag === "success") {
                axios.get("http://localhost:4003/api/me").then((result) => {
                    setLoginStatus(result?.data.status);
                    setUser(result?.data.user);
                });
            }
        } catch (e) {
            console.log("e", e); // response.data.msg
        }
    };

    const reqLogout = async () => {
        axios.post("http://localhost:4003/api/logout").then(() => {
            setLoginStatus(false);
            setUser(null);
        });
    };

    const reqKakaoLogin = async () => {
        window.location.href = "http://localhost:4003/api/kakaologin";
    }

    return (
        <>
            {loginStatus ? (
                <>
                    <h1>{user.id}</h1>
                    <h1>{user.addr}</h1>
                    <button onClick={reqLogout}>로그아웃</button>
                </>
            ) : (
                <>
                    <button onClick={reqLogin}>로그인</button>
                    <button onClick={reqKakaoLogin}>카카오 로그인</button>
                </>
            )}
        </>
    );
}

export default App;
