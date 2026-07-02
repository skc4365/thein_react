import './App.css'
import { useSelector, useDispatch} from "react-redux";
import { increase, decrease } from "./counterSlice";
import { addTodo, deleteTodo } from './todoSlice';
import { useState } from 'react';

function App() {
  // --- 카운터 ---상태 읽기 
  const count = useSelector((state)=>state.counter.value);
  // --- 카운터 --- 상태 변경 요청
  const dispatch = useDispatch();
  // --- 할일목록 --- 상태관리
  const [text, setText] = useState("");

  // --- 할일목록 --- 상태 읽기
  const todos= useSelector((state)=>state.todo.list);
  // --- 할일목록 --- store 변경 요청
  const todoDispatch = useDispatch();
  // --- 할일목록 --- 목록추가 함수
  const handleAdd = () => {
    if(text === "") return;
    todoDispatch(addTodo(text));
    setText("");
  } 

  return (
    <>
      <h1>{count}</h1>
      <button onClick={()=>dispatch(increase())}>1 더하기</button>
      <button onClick={()=>dispatch(decrease())}>1 빼기</button>
      <br />
      <hr />
      <br />
      <h1>할 일 목록</h1>
      <p>목록입력: 
        <input value={text} 
          onChange={(e)=>setText(e.target.value)} autoFocus />
      </p>
      <br />
      <button type='text' onClick={handleAdd}>추가</button>
      <div>
        {
          todos.map((todo)=>(
            <div class="todogap" key={todo.id}>
              {todo.text}
              <button onClick={()=> todoDispatch(deleteTodo(todo.id))}>삭제</button>
            </div>
          ))
        }
      </div>
      

      

      {/* {addTodo}{deleteTodo} */}

    </>
  )
}

export default App
