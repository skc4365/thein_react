import React, { useState } from 'react';

function MyButton({count, onClick}) {
    const [cnt, setCnt] = useState(100);
    
    function handleClk(){
        setCnt(cnt + 10);
    }
    return (
        <div>
            <button onClick={onClick}>클릭 {count}번</button> 
        </div>
    );
}

export default MyButton;