import React from 'react';
import MyButton from './MyButton';

function Myapp(props) {
    return (
        <div>
            Hellow REACT~ 방가방가!!
            <p>오늘 학습할 내용은</p>
            <br /><hr /><br />
            <p>리액트의 구조와 컴퍼넌트 사용해보자</p>
            <MyButton/>
        </div>
    );
}

export default Myapp;