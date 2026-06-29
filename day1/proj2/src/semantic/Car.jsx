import React from 'react';

// props.brand
function Car(props) {
    return (
        <div>
            <h2>내 차는 {props.brand} 브랜드야!</h2>
        </div>
    );
}

export default Car;