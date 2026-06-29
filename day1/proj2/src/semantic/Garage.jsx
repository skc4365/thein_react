import React from 'react';
import Car from './Car';
import Car2 from './Car2';

let x = "바퀴X"
function Garage(props) {
    return (
        <div>
            <Car brand="Ford"/>
            <Car brand="BMW"/>
            <Car brand="르노"/>
            <Car brand="기아"/>
            <Car2 wheel={x} year={1969} brand="Ford" model="Mustang" color="red"/>
            <Car2 wheel={x} year={1979} brand="BMW" model="B222" color="yellow"/>
            <Car2 wheel={x} year={1989} brand="르노" model="XM3" color="green"/>
            <Car2 wheel={x} year={1999} brand="기아" model="기아몰라" color="purple"/>
        </div>
    );
}

export default Garage;