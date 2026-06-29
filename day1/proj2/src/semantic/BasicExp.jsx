import React from 'react';
import './basic.css'

const name = '홍길동'
const isLoggedIn = true
const items = ['사과', '바나나', '체리']

function BasicExp(props) {
    return (
        <div className='container'>
            {/* 값 사용법: 표현식 */}
            <h1> 좋은 오후 {name}</h1>
            {/* 삼항연산자: 조건부 렌더링 */}
            <p>{isLoggedIn ? '로그인 상태입니다' : '로그아웃 상태입니다'}</p>
            <p style={{color:'orange', fontSize:'30px'}}>
                스타일은 그대로 사용하기</p>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
            <ul>
                {/* 리스트 렌더링 */}
                {
                    // map(값, 인덱스)
                    items.map(
                        (item, index) => (
                            // <li key={item}>{index}</li>
                            <li key={index}>{item}</li>
                        )
                    )
                }
            </ul>

        </div>
    );
}

export default BasicExp;