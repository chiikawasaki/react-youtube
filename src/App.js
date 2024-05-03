import TodoList from "./TodoList";
import { useState, useRef } from "react";
import { v4 as uuidv4} from "uuid";

//コンポーネントー＞役割分担しやすい
function App() {
  const [todos, setTodos] = useState([
    { id: 1, name: "Todo1", completed: false },
  ]);
  const todoNameRef = useRef();

  const handleAddTodo = () => {
    //タスクを追加する
    const name = todoNameRef.current.value;
    //setTodosでtodosを管理
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4() ,name: name,completed: false}];
    });
    todoNameRef.current.value = null;
  };

  return (
    <>
      <TodoList todos={todos} />
      <input type="text" ref={todoNameRef} />
      <button onClick={handleAddTodo}>タスクを追加</button>
      <button>完了したタスクの削除</button>
      <div>残りのタスク:0</div>
    </>
  );
}

export default App;
