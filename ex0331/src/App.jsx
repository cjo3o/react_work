import {useState} from 'react'
import './App.css'
import Aa from "./components/AA.jsx";
import MyTime from "./components/MyTime.jsx";

function App() {
    const [style, setStyle] = useState("on");
    const [showAA, setShowAA] = useState(false);

    return (
        <>
            <MyTime></MyTime>
            {style === "on" ? (
                <h1 style={{backgroundColor: 'rgb(100, 200, 100)'}}>on = {style}</h1>
            ) : (
                <h1 style={{backgroundColor: 'rgb(300, 100, 100)'}}>Off = {style}</h1>
            )}
            <button onClick={() =>
                setStyle(style === "on" ? "off" : "on")
            }>
                Toggle
            </button>
            {showAA && <Aa/>}
            <button onClick={() => {
                if (setShowAA(!showAA)) {
                    return showAA;
                }
            }}>Toggle</button>
        </>
    )
}

export default App
