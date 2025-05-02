import {useState} from 'react'
import './App.css'
import {Map} from "react-kakao-maps-sdk";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Map
                center={{lat: 33.5563, lng: 126.79581}}
                style={{width: "100%", height: "360px"}}
            >

            </Map>
        </>
    )
}

export default App
