import { useEffect, useState } from "react";


function WithoutMyCustomHook() {
    const [data, setData] = useState(null);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res)=>res.json())
        .then((data)=>setData(data));
    }, []);
    return (
        <>
        {data && data.map((item)=>{
            return <p key={item.id}>{item.title}</p>;
        })}
        </>
    );
}

export default WithoutMyCustomHook;