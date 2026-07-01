import React, { useRef } from 'react';

function MyApp2(props) {
    const inputElement = useRef();

    const focusInput = () => {
        inputElement.current.focus();
    }
    return (
        <div>
             {/* 버튼 클릭시에 인풋박스 setFocus해주기. */}
            <input type="text" ref={inputElement} /><br />
            <button onClick={focusInput}>Focus 인풋박스</button>
            <hr />
        </div>
    );
}

export default MyApp2;