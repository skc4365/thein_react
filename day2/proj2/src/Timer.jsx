import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function Timer(props) {
    const [count, setCount] = useState(0);

    // 계속 rendering
    // useEffect(() => { });

    // 한번만 rendering
    // useEffect(() => { }, []);
    useEffect(() => {
                setTimeout(()=>{
                    setCount((count) => count + 1);
                }, 1000);
            }, []);
    return (
        <div>
            <h1>1초마다 카운트 {count}반영</h1>
        </div>
    );
}

export default Timer;