import { useState } from "react";


function WithoutMyUseMemo() {
    // React 함수형 컴포넌트는 state가 하나라도 변경되면 전체 함수가 다시 실행.
    // count 변경 → 컴포넌트 재실행
    // todos 변경 → 컴포넌트 재실행
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    const calculation = expensiveCalculation(count);

    const increment = ()=>{
        setCount((c)=>c+1);
    };
    const addTodo=()=>{
        setTodos((t)=>[...t, "New Todo"]);
    };
    return (
        <>
            <div>
                <h2>나의 할일</h2>
                {
                    todos.map((todo, index)=>{
                        return <p key={index}>{todo}</p>;
                    })
                }
                <button onClick={addTodo}>할일 추가: count 변경 → 컴포넌트 재실행</button>
            </div>
            <hr />
            <div>
                <p>카운트: {count}</p>
                <button onClick={increment}>+</button>
                <h2>렌더링할 때마다 실행되는 비용이 많이 드는 함수</h2>
                <p>{calculation}</p>
                <p>참고로 이 예제는 '할 일 추가' 버튼을 클릭할 때도 비용이 많이 드는 함수를 실행합니다.</p>
            </div>
        </>
    );
}
const expensiveCalculation = (num)=>{
    console.log("계산중....");
    for (let i = 0; i < 1000000000; i++) {
        num += 1;
    }
    return num;
}

export default WithoutMyUseMemo;