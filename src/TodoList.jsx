import React from 'react'
import Todo from './Todo'

//コンポーネント
export const TodoList = ({todos,toggleTodo}) => {
  return todos.map((todo) => <Todo todo = {todo} key = {todo.id} toggleTodo={toggleTodo}/>)
}

//外部でも使える
export default TodoList;