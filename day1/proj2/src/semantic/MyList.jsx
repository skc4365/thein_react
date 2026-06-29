import React from 'react';

function MyList(props) {
    const data = [1111,2222,3333,4444,5555];
    return (
        <div>
            <hr />
            <h1>MyList</h1>
            <ul>{
                data.map(
                    (num, index) => 
                        <li key={index}>{num}</li>
                )
                }</ul>
        </div>
    );
}

export default MyList;