import React, {useEffect} from 'react';
import axios from "axios";

function Lotto(props) {
    const [lottoNumbers, setLottoNumbers] = React.useState([]);
    const [drwNo, setDrwNo] = React.useState(1163);

    async function getLottoNumbers() {
        const result = await axios.get(`/api/common.do?method=getLottoNumber&drwNo=${drwNo}`);
        console.log(result);

        if (result.data.returnValue === "success") {
            setLottoNumbers([
                result.data.drwtNo1,
                result.data.drwtNo2,
                result.data.drwtNo3,
                result.data.drwtNo4,
                result.data.drwtNo5,
                result.data.drwtNo6,
            ]);
        } else {
            alert('조회할 수 없습니다.');
            setDrwNo(drwNo - 1);
        }

    }

    useEffect(() => {
        getLottoNumbers();
    }, [drwNo]);
    return (
        <div>
            <h1>Lotto {drwNo} 회차</h1>
            <div style={{display: 'flex', gap: '10px'}}>
                {lottoNumbers.map((num) => (
                    <span key={num} className="lotto">{num}</span>
                ))}
            </div>
            <div>
                <button onClick={() => {
                    setDrwNo((drwNo) => drwNo - 1);
                }}>이전
                </button>
                <button onClick={() => {
                    setDrwNo((drwNo) => drwNo + 1);
                }}>다음
                </button>
            </div>
        </div>
    );
}

export default Lotto;