import React, { useState } from 'react';
import MyUseState from './MyUseState';
import MyButton from './MyButton';

function MyApp() {
    const [count, setCount] = useState(100);

    function handleClick(){
        setCount(count + 10);
    }
    return (
        <div>
            <h3>컴퍼넌트MyApp의 값공유</h3>
            <MyButton count={count} 
            onClick={handleClick}/>

            <MyButton count={count} 
            onClick={handleClick}/>
        </div>
    );
}

export default MyApp;