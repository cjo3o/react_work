import {useEffect, useRef, useState} from 'react'
import './App.css';
import Child from "./components/Child.jsx";


function App() {
    const [count, setCount] = useState(0);
    const [aa, setAa,] = useState(10);
    const myRef = useRef(null);
    const inputRef = useRef(null);

    //최초에 한번만 로딩된다.
    useEffect(() => {
        console.log("부모 useEffect");
    }, [aa])

    return (
        <>
            <input type="number" name="" id="" ref={myRef}/>
            <button onClick={() => {
                myRef.current.focus();
                console.log(myRef.current.value);
            }}>포커스감
            </button>
            <button onClick={() => {
                inputRef.current = inputRef.current + 1;
            }}>Ref변경 aRef = {inputRef.current}</button>
            <Child count={count}></Child>
            <div classNdame="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
            <div>
                <button onClick={() => {
                    setAa((aa) => aa + 1);
                }}>aa is {aa}</button>
            </div>
        </>
    )
}

export default App
