import React, {useState} from "react";

function Q1() {
    const [count, setCount] = useState(0);
    const [age, setAge] = useState("");
    const [inputDate, setInputDate] = useState("");

    return (
        <>
            <div>
                <h1>클릭 수 = {count}</h1>
                <button onClick={() => setCount(count + 1)}>증가</button>
                <button onClick={() => setCount(count - 1)}>감소</button>
                <button onClick={() => setCount(0)}>리셋</button>
            </div>

            <div>
                <h1>만 나이는 {age}살 입니다.</h1>
                <input
                    type="text"
                    value={inputDate}
                    onChange={(e) => setInputDate(e.target.value)}
                    placeholder="출생년월일 (YYYYMMDD)"
                />
                <button onClick={() => {
                    const toDay = new Date();
                    const toDayYear = toDay.getFullYear();
                    const toDayMonth = toDay.getMonth() + 1;
                    const toDayDate = toDay.getDate();

                    if (inputDate.length !== 8) {
                        alert("출생년월일을 YYYYMMDD 형식으로 입력해주세요!");
                        return;
                    }

                    const myYear = Number(inputDate.slice(0, 4));
                    const myMonth = Number(inputDate.slice(4, 6));
                    const myDate = Number(inputDate.slice(6, 8));

                    let calculatedAge = toDayYear - myYear;

                    if (toDayMonth < myMonth || (toDayMonth === myMonth && toDayDate < myDate)) {
                        calculatedAge -= 1;
                    }

                    setAge(calculatedAge);
                }}>입력
                </button>
            </div>
        </>
    );
}

export default Q1;
