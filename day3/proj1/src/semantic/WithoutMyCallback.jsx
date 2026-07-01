import React, { useState } from 'react';

const Button = React.memo(({onClick, text})=>{
    alert(`자식 ${text} 버튼 렌더링됨`);
    return <button onClick={onClick}>{text}</button>
});
// useCallback 사용안하면: 렌더링마다 새로 생성.
function WithoutMyCallback() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const handleClick1 = ()=>{
        setCount1(count1+1);
    };
    const handleClick2 = ()=>{
        setCount2(count2+1);
    };
    alert("부모가 렌더링됨");
    return (
        <>
           <h3>콜백 사용안함</h3> 
           <p>Count1 : {count1}</p>
           <p>Count2 : {count2}</p>
           <Button onClick={handleClick1} text="Button 1"/>
           <Button onClick={handleClick2} text="Button 2" />
            
        </>
    );
}

export default WithoutMyCallback;