import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

// 계속 rendering
// useEffect(() => { });

// 한번만 rendering
// useEffect(() => { }, []);

// cnt 업데이트되면 rendering
// useEffect(() => { }, [cnt]);
function MyUseEffect() {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    useEffect(()=>{
        setCalculation(()=> count * 2);
    }, [count]);

    return (
        <div>
            <p>카운트: {count}</p>
            <button 
            onClick={()=> 
                setCount((c)=>c+1)}>
            +</button>
            <p>계산값: {calculation}</p>
        </div>
    );
}

export default MyUseEffect;