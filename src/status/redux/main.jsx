import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function Main() {
  const [todoText, setTodoText] = useState("");
  const paddingTodos = useSelector((state) => {
    return Object.keys(state.todoList).filter(
      (todo) => state.todoList[todo] === false
    );
  });

  const dispatch = useDispatch();
  const addTodoList = () => {
    dispatch({
      type: "ADD_TODOLIST",
      payload: { todo: todoText },
    });
    setTodoText("");
  };
  const deleteTodoList = (todoText) => {
    console.log(todoText);
    dispatch({
      type: "DELETE_TODOLIST",
      payload: { todo: todoText },
    });
  };

  return (
    <div>
      <input value={todoText} onChange={(ev) => setTodoText(ev.target.value)} />
      <button type="button" onClick={() => addTodoList(todoText)}>
        增加待办事项
      </button>
      <ul>
        {paddingTodos.map((todo) => {
          return (
            <li key={todo} onClick={() => deleteTodoList(todo)}>
              {todo}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Main;
