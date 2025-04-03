import React from "react";

function AA({aa, bb}) {

    console.log('AA 랜더링 됨');
    return (
        <>
            <div>AA</div>
            {/*<h1>props.aa = {props.aa}</h1>*/}
            {/*<h1>props.aa = {props.bb}</h1>*/}
            <h1>aa = {aa}</h1>
            <h1>bb = {bb}</h1>
        </>


    )
}

export default AA;