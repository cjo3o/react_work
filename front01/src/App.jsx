import './App.css';
import axios from 'axios';
import {useState} from "react";
import dbusers from "./users.json";

function App() {
    // const [users, setUsers] = useState([{'name': '홍길동', 'password': '1234'}]);
    const [users, setUsers] = useState(dbusers);
    const getUsers = async (event) => {
        const result = await axios.get('https://port-0-back01-manacntt27a3e0c2.sel4.cloudtype.app/')
        const {data, status} = result;

        setUsers(data);
    }

    return (
        <>
            <div className={'text-3xl'}>
                안녕
            </div>
            {
                users.map((user) => {
                    return (
                        <div key={user.id}>
                            <div>{user.id}</div>
                            <div>{user.password}</div>
                        </div>
                    )
                })
            }
            <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                onClick={(event) => getUsers(event)}>불러오기
            </button>
        </>
    )
}

export default App
