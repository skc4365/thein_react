import React, { useMemo, useState } from "react";

function MyUseMemo() {
// useMemo훅은 두 번째 매개변수에, 종속성을 선언. 
// 비용이 많이 드는 함수는 종속성이 변경시에만 실행됨.

// 비용이 많이 드는 함수는 count 값이 변경될 때만 실행됨.
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  // ***
  const calculation = useMemo(() => 
    expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };
  return (
    <>
      <div>
        <h2>나의 할일</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>할일 추가-기본함수실행</button>
        
      </div>
      <hr />
      <div>
        <p>useMemo로 count를 관리함: 다른함수는 재렌더링 없음.</p>
        <p>카운트: {count}</p>
        <button onClick={increment}>+</button>
        <h2>렌더링할 때마다 실행되는 비용이 많이 드는 함수</h2>
        <p>{calculation}</p>
        <p>
          참고로 이 예제는 '할 일 추가' 버튼을 클릭할 때도 비용이 많이 드는
          함수를 실행합니다.
        </p>
      </div>
    </>
  );
}
const expensiveCalculation = (num) => {
  console.log("계산중....");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

export default MyUseMemo;
