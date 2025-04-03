import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AA from "./components/AA.jsx";
import BB from "./components/BB.jsx";



function App() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('홍길동')

    useEffect(() => {
        setCount(localStorage.getItem('count'));
        console.log('useEffect 호출됨');
    }, []);

    const addCount = () => {
        setCount(count + 1);
        localStorage.setItem('count', count + 1);
    };
    const subCount = () => {
        setCount(count - 1)
        localStorage.setItem('count', count - 1);
    };
    const changeName = () => {
        setName(name + '1');
    }

    return (
        <>
            <BB addCount={addCount} subCount={subCount}></BB>
            <AA aa='10' bb={20}></AA>
            <h1>name = {name}</h1>
            <button onClick={changeName}>이름변경</button>
            <h1>count = {count}</h1>
            <button onClick={addCount}>count증가</button>
            <button onClick={subCount}>count감소</button>
        </>
    )
}

export default App
