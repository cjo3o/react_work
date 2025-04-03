import React, {useEffect} from 'react';

function Aa(props) {
    let count = 0;
    useEffect(() => {
    console.log("Aa컴포넌트 마운트됨(생성)");
    const myInter = setInterval(() => {
        console.log(`count = ${count++}`);
    }, 1000);
    return () => {
        console.log('Aa컴포넌트 언마운트됨(삭제)');
        clearInterval(myInter);
    }
    }, []);

    return (
        <div>
            <h1>AA component</h1>
        </div>
    );
}

export default Aa;