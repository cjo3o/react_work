import React, {useState} from "react";

function DD({style, children}) {

    const [childStyle, setChildStyle] = useState(style);
    
    console.log('DD 랜더링 됨');

    return (
        <>
            <button onClick={() => setChildStyle({...style, color: "blue"})}>파란색으로</button>
            <button onClick={() => setChildStyle({...style, color: "red"})}>빨간색으로</button>
            <button onClick={() => setChildStyle({...style, color: "white"})}>하얀색으로</button>
            <div style={childStyle}>
                <div>DD</div>
                {children}
            </div>

        </>
    )
}

export default DD;