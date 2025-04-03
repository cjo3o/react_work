import React from "react";
import DD from "./components/DD.jsx";

function App2() {

    const [count, setCount] = React.useState(0);
    
    console.log("App2 랜더링됨");
    
    const style =
        {
            border: "1px solid black",
            borderRadius: '20px',
            padding: '30px',
            color: 'black',
            backgroundColor: 'beige'
        }
    return (
        <>
            <button onClick={() => { setCount(count + 1)}}>랜더링 이루어짐</button>
            <div>
                <h1>App2</h1>
            </div>
            <DD style={style}>
                <h1>자식태그</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, consequatur cumque deleniti, dicta
                    minus neque nisi nostrum officiis pariatur placeat porro quam quas, repellat unde voluptatem. Animi
                    atque blanditiis magni.</p>
            </DD>
            <DD style={style}>
                <h1>자식태그</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, consequatur cumque deleniti, dicta
                    minus neque nisi nostrum officiis pariatur placeat porro quam quas, repellat unde voluptatem. Animi
                    atque blanditiis magni.</p>
            </DD>
            <DD style={style}>
                <h1>자식태그</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, consequatur cumque deleniti, dicta
                    minus neque nisi nostrum officiis pariatur placeat porro quam quas, repellat unde voluptatem. Animi
                    atque blanditiis magni.</p>
            </DD>
        </>
    )
}

export default App2;