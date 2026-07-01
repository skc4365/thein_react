import React, { useEffect, useRef, useState } from 'react';

function MyApp3(props) {
    const [inputValue, setInputValue] = useState("");
    const previousInputValue = useRef("");

    useEffect(()=>{
        previousInputValue.current = inputValue;
    }, [inputValue]);
    return (
        <div>
            <input type="text" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}/>
            <hr />
            <h3>현재 값:{inputValue}</h3>
            <h3>이전 값:{previousInputValue.current}</h3>
        </div>
    );
}

export default MyApp3;