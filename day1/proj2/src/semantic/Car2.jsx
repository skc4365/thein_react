import React from 'react';
//  <Car2 brand="기아" model="기아몰라" color="purple"/>

function Car2(props) {
    return (
        <div>
            {/* <h2 style={{backgroundColor:"red"}}>나는  {props.color}색상의 브랜드는 {props.brand}이고, 모델은 {props.model}인 자동차야~!  </h2> */}
            <h2 class={props.color}>
                나는  {props.year}년도에 출고됨. 
                휠이 -{props.wheel}- 
                {props.color}색상의 
                브랜드는 {props.brand}이고, 모델은 {props.model}인 자동차야~!  </h2>
        </div>
    );
}

export default Car2;