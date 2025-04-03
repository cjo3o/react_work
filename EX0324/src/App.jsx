import {useState} from 'react'
import './App.css'
import BB from "./BB.jsx";

function CC() {
    return (
        <div><h1>CC</h1></div>
    )
}

function App() {
    const [aa, setAA] = useState('useStateAA');
    const doClick = () =>  setAA('asdfasdf');
    const test = '안녕하세요 test입니다';

    return (
        <>
            <CC></CC>
            <BB></BB>
            <h2 className='title'>{test}</h2>
            <h1>안녕 {aa}</h1>
            <button onClick={doClick}>버튼</button>
        </>
    )
}

export default App
