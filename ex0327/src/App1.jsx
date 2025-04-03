import React, {useState} from "react";
import CC from "./components/CC.jsx";

function App1() {
    const [style, setStyle] = useState(
        {
            border: "1px solid black",
            borderRadius: '20px',
            padding: '30px',
            color: 'black',
            backgroundColor: 'beige'
        }
    )
    return (
        <>
            <div>
                <h1>App1</h1>
                <button onClick={() => setStyle({...style, color: "blue"})}>파란색으로</button>
                <button onClick={() => setStyle({...style, color: "red"})}>빨간색으로</button>
                <button onClick={() => setStyle({...style, color: "white"})}>하얀색으로</button>
            </div>
            <CC style={style}>
                <h1>자식태그</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, consequatur cumque deleniti, dicta
                    minus neque nisi nostrum officiis pariatur placeat porro quam quas, repellat unde voluptatem. Animi
                    atque blanditiis magni.</p>
            </CC>
            <CC style={style}>
                <h1>자식태그</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, consequatur cumque deleniti, dicta
                    minus neque nisi nostrum officiis pariatur placeat porro quam quas, repellat unde voluptatem. Animi
                    atque blanditiis magni.</p>
            </CC>
            <CC style={style}>
                <h1>자식태그</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, consequatur cumque deleniti, dicta
                    minus neque nisi nostrum officiis pariatur placeat porro quam quas, repellat unde voluptatem. Animi
                    atque blanditiis magni.</p>
            </CC>
        </>
    )
}

export default App1;