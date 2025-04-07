import React, {useEffect, useRef, useState} from 'react';

function Lotto() {
    const [drwNo, setDrwNo] = useState(1166);
    const [numbers, setNumbers] = useState([]);
    const [myNumbers, setMyNumbers] = useState([]);
    const [bnusNo, setbnusNo] = useState(0);
    const [drwNoDate, setdrwNoDate] = useState(0);
    const [firstAccumamnt, setfirstAccumamnt] = useState(0);
    const [firstPrzwnerCo, setfirstPrzwnerCo] = useState(0);
    const [firstWinamnt, setfirstWinamnt] = useState(0);
    const inputRef = useRef();

    async function getMyNumbers() {
        const arr = new Set();
        while (arr.size < 6) {
            arr.add(Math.floor(Math.random() * 45) + 1);
        }
        const result = [...arr].sort((a, b) => a - b);
        setMyNumbers(result);
    }

    async function getNumbers(drwNoToFetch) {
        try {
            const response = await fetch(`api/common.do?method=getLottoNumber&drwNo=${drwNoToFetch}`);
            const res = await response.json();
            console.log(res);

            setNumbers([
                res.drwtNo1,
                res.drwtNo2,
                res.drwtNo3,
                res.drwtNo4,
                res.drwtNo5,
                res.drwtNo6
            ].sort((a, b) => a - b));
            setbnusNo(res.bnusNo);
            setDrwNo(res.drwNo);
            setdrwNoDate(res.drwNoDate);
            setfirstAccumamnt(Math.round(res.firstAccumamnt / 100000000));
            setfirstPrzwnerCo(res.firstPrzwnerCo);
            setfirstWinamnt(res.firstPrzwnerCo === 0 ? 0 : Math.round(res.firstWinamnt / 100000000));
        } catch (error) {
            console.error('로또 번호 불러오기 실패:', error);
        }
    }

    useEffect(() => {
        getNumbers(drwNo);
    }, [drwNo]);

    return (
        <div style={{display: 'flex', gap: '1rem'}}>
            <button onClick={() => setDrwNo(drwNo - 1)}>◁</button>

            <div>
                <h1>Lotto</h1>
                <h2>{drwNo}회 당첨 번호</h2>
                <h3>{drwNoDate} 추첨</h3>

                <input type="text" ref={inputRef} placeholder="회차 입력 (예: 1166)"/>
                <button onClick={() => {
                    const inputValue = Number(inputRef.current?.value);
                    if (!isNaN(inputValue)) getNumbers(inputValue);
                }}>조회
                </button>

                <div style={{display: 'flex', gap: '1rem', marginTop: '1rem'}}>
                    {numbers.map(number => (
                        <div
                            key={number}
                            style={{
                                borderRadius: '50%',
                                background: 'rgb(100, 200, 255)',
                                width: '2rem',
                                height: '2rem',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                fontWeight: 'bold'
                            }}
                        >
                            {number}
                        </div>
                    ))}
                    <span style={{fontWeight: "bold"}}>+</span>
                    <div
                        style={{
                            borderRadius: '50%',
                            background: 'rgb(100, 200, 255)',
                            width: '2rem',
                            height: '2rem',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontWeight: 'bold'
                        }}
                    >
                        {bnusNo}
                    </div>
                </div>

                <div style={{border: "solid 1px #ccc", margin: "1rem auto", width: '70%'}}>
                    <h3 style={{margin: "0", padding: "0.5rem", borderBottom: "solid 1px #ccc"}}>1등 총 당첨금</h3>
                    <div>
                        <h2>
                            {firstAccumamnt}억원
                            <span style={{fontSize: "1.2rem"}}> ({firstPrzwnerCo}명 / {firstWinamnt}억)</span>
                        </h2>
                    </div>
                </div>

                <hr style={{margin: '2rem 0'}}/>
                <button onClick={getMyNumbers}>내 번호 추첨</button>

                {myNumbers.length > 0 && (
                    <>
                        <h3>내 번호</h3>
                        <div style={{display: 'flex', gap: '1rem', marginTop: '1rem', justifyContent: 'center'}}>
                            {myNumbers.map(number => (
                                <div
                                    key={number}
                                    style={{
                                        borderRadius: '50%',
                                        background: 'rgb(255, 200, 100)',
                                        width: '2rem',
                                        height: '2rem',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    {number}
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>

            <button onClick={() => setDrwNo(drwNo + 1)}>▷</button>
        </div>
    );
}

export default Lotto;
