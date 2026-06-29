import React, { useState } from 'react';

function MyForm(props) {
    const [user, setUser] = useState({
        firstName:'',
        lastName:'',
        email:''
    });

    const handleChage = (event) => {
        setUser({...user, [event.target.name]:event.target.value});
    }
    const handleSubmit = (event) => {
        alert(`Hello ${user.firstName} ${user.lastName}`);
    }
    return (
        <div>
            <hr />
            <h1>MyForm</h1>
            <form onSubmit={handleSubmit}>
                <label>이름</label>
                <input type="text" name='firstName' onChange={handleChage}
                value={user.firstName}/>
                <label>성</label>
                <input type="text" name='lastName' onChange={handleChage}
                value={user.lastName}/>
                <label>이메일</label>
                <input type="email" name='email' onChange={handleChage}
                value={user.email}/>
                <input type="submit" value="등록" />
            </form>

        </div>
    );
}

export default MyForm;