import './App.css';
import axios from 'axios';
import {useState} from "react";
import dbusers from "./users.json";
import AirComponent from "./components/AirComponent.jsx";

const backUrl = import.meta.env.VITE_BACK_URL;

function App() {
    // const [users, setUsers] = useState([{'name': '홍길동', 'password': '1234'}]);
    const [users, setUsers] = useState(null);
    const [supausers, setSupaUsers] = useState(null);
    const getUsers = async (event) => {
        const result = await axios.get(backUrl);
        const {data, status} = result;

        setUsers(data);
    }

    const getSupaUsers = async (event) => {
        const {data} = await axios.get(`${backUrl}supauser`);

        setSupaUsers(data);
    }

    return (
        <>
            <AirComponent></AirComponent>
            <div className={'text-3xl'}>
                안녕
            </div>
            {
                users && users.map((user) => {
                    return (
                        <div key={user.idx}>
                            <div>{user.id}</div>
                            <div>{user.password}</div>
                        </div>
                    )
                })
            }
            <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                onClick={(event) => getUsers(event)}>
                mariadb불러오기
            </button>
            <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                onClick={(event) => getSupaUsers(event)}>
                supadb불러오기
            </button>
            {
                supausers && supausers.map((supauser) => {
                    return (
                        <div key={supauser.id}>
                            <div>{supauser.name}</div>
                            <div>{supauser.email}</div>
                            <div>{supauser.password}</div>
                            <div>{supauser.created_at}</div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default App
