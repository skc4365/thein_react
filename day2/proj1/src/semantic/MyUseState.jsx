import React, { useState } from 'react';

function MyUseState(props) {
    const [count, setCount] = useState(100);

    function handleClick(){
        setCount(count + 10);
    }
    return (
        <div>
            <h3>컴퍼넌트 각자 값 사용</h3>
           <button onClick={handleClick}>클릭 {count}번</button> 
        </div>
    );
}

export default MyUseState;