import React, { useCallback, useState } from 'react';

const Button = React.memo(({onClick, text})=>{
    console.log(`${text} 버튼 렌더링됨`);
    return <button onClick={onClick}>{text}</button>
});
// useCallback: 함수 재사용
function MyUseCallBack() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const  handleClick1 = useCallback(()=>{
        setCount1(count1+1);
    }, [count1]);
    const  handleClick2 = useCallback(()=>{
        setCount2(count2+1);
    }, [count2]);
    console.log(" 부모가 렌더링됨");
    return (
        <>
            <h2>콜백 사용함.</h2>
            <p>Count1: {count1}</p>
            <p>Count2: {count2}</p>
            <Button onClick={handleClick1} text="Button 1"/>
            <Button onClick={handleClick2} text="Button 2"/>
            <hr />
        </>
    );
}

export default MyUseCallBack;