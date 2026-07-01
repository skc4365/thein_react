import React, { useEffect, useRef, useState } from 'react';

function MyApp(props) {
    // 훅 use 
    // useState : 상태 저장.
    // useRef   : 값 기억(렌더링 안함).
    // useEffect: 렌더링 후 실행.
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);

    useEffect(()=>{
        // count.current 초기값
        count.current = count.current + 1;
    });

    return (
        <div>
            <p>타입: </p>
            <input type="text" 
            value={inputValue}
            onChange={(e)=>setInputValue(e.target.value)}
            />
        <h3>렌더링 횟수:{count.current}</h3>
        </div>
    );
}

export default MyApp;