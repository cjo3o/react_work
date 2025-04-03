import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Q1 from "@/components/q1.jsx";

createRoot(document.getElementById('root')).render(
    // <StrictMode>
    <Q1></Q1>
    // </StrictMode>,
)
