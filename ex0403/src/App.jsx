import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";

import Header from "./layouts/Header.jsx";
import Footer from "./layouts/Footer.jsx";

function App() {

    return (
        <>
            <BrowserRouter>
                <Header></Header>
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/contact' element={<Contact/>}></Route>
                    <Route path='/about' element={<About/>}></Route>
                </Routes>
                <Footer></Footer>
            </BrowserRouter>
        </>
    )
}

export default App
