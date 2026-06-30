import React from 'react';
import { useState } from 'react';

function Component1() {
    const [user, serUser] = useState("Linus");
    return (
        <div>
            <h1>{`Hello ${user}!`}</h1>
            <Component2 user={user}/>
        </div>
    );
}
function Component2({user}) {
    return (
        <div>
            <p>Component 222</p>
            <Component3 user={user}/>
        </div>
    );
}
function Component3({user}) {
    return (
        <div>
            <p>Component 333</p>
            <h2>{`Hello ${user} again!`}</h2>
        </div>
    );
}

export default Component1;
