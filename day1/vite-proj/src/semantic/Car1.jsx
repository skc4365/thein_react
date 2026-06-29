import React from 'react';
import './section.css'

function Car1(props) {
    // pros.color="redcolor"
    // pros.color="bluecolor"
    // pros.color="greencolor"
    return (
        <div>
            {/* <h2 class="redcolor">나는 {props.color} 스포츠카야!</h2>
            <h2 class="bluecolor">나는 {props.color} 스포츠카야!</h2>
            <h2 class="greencolor">나는 {props.color} 스포츠카야!</h2> */}
            <h2 class={props.color}>나는 {props.color} 스포츠카야!</h2>
            
        </div>
    );
}

export default Car1;