import {useState} from 'react'
import './App.css'
import Header from "./layout/Header.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Lotto from "./pages/Lotto.jsx";
import MyPage from "./pages/MyPage.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <h1>Vite + React</h1>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/lotto" element={<Lotto/>}/>
                <Route path="/mypage" element={<MyPage/>}/>
            </Routes>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
        </>
    )
}

export default App
