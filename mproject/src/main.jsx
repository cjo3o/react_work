import {createRoot} from 'react-dom/client'
import { unstableSetRender } from 'antd';
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import {registerSW} from "virtual:pwa-register";

unstableSetRender((node, container) => {
    container._reactRoot ||= createRoot(container);
    const root = container._reactRoot;
    root.render(node);
    return async () => {
        await new Promise((resolve) => setTimeout(resolve, 0));
        root.unmount();
    };
});

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)
