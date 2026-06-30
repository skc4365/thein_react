import { useEffect } from "react";
import { useState } from "react";


function Timer2() {
    const [count, setCount] = useState(0);
    
    useEffect(()=>{
        let timer = setTimeout(() => {
            setCount((count)=> count+1);
        }, 1000);

        return ()=> clearTimeout(timer);
    }, []);
    return (
        <div>
            <h3>clearTimeout 적용: {count}번째 렌더링</h3>
        </div>
    );
}

export default Timer2;