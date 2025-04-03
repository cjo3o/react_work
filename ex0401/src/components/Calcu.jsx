import React, {useMemo, useState} from 'react';
import Header from "@/layout/Header.jsx";

function Calcu() {

    const [hardNum, setHardNum] = useState(1);
    const [easyNum, setEasyNum] = useState(1);
    const easyCalcu = (num) => {
        return easyNum;
    }
    const hardCalcu = useMemo(num) => {
        console.log('hard');
        for (let index = 0; index < 1_000_000_000; index++) {
            num += index;
        }
        console.log('오래걸리는 계산');
        console.timeEnd('hard');
        return num;
    };

    return (
        <div>
            <Header></Header>
            <h1>Calcu</h1>
            <div>
                <p>hardCalcu = {hardCalcu(hardNum)}</p>
                <button onClick={() => setHardNum(hardNum + 10)}>어려운 계산</button>
            </div>
            <div>
                <p>easyCalcu = {easyCalcu(easyNum)}</p>
                <button onClick={() => setEasyNum(easyNum + 5)}>쉬운 계산</button>
            </div>

        </div>
    );
}

export default Calcu;