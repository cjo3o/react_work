import React, {useEffect, useState} from 'react';

function App1(props) {
    const [drwNo, setDrwNo] = useState(1165);
    const [lottoData, setLottoData] = useState(null);

    const fetchLottoData = (drwNo) => {
        fetch(`api/common.do?method=getLottoNumber&drwNo=${drwNo}`)
            .then(res => res.json())
            .then(data => {
                setLottoData(data);
                console.log(data);
            })
    }

    useEffect(() => {
        fetchLottoData(drwNo);
    }, [drwNo]);


    return (
        <div>
            <div className="title">로또 6/45</div>
            <div className="round">{lottoData.drwNo}회 당첨결과</div>
            <div className="date">({lottoData.drwNoDate} 추첨)</div>

            <div className="numbers">

            </div>

            <div className="result-box">
                <div>1등 총 당첨금</div>
                <div className="amount">285억원</div>
                <div className="sub">(13명 / 22억)</div>
            </div>

            <div className="buttons">
                <button className="btn btn-gray">회차별 결과</button>
                <button className="btn btn-green">구매하기</button>
            </div>


        </div>
    );
}

export default App1;