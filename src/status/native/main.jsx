import React, { useState, useMemo } from "react";
import { useStore } from "./context";

function Main() {
  const { state, dispatch } = useStore();
  const [todoText, setTodoText] = useState("");

  const paddingTodos = useMemo(() => {
    return Object.keys(state.todoList).filter(
      (todo) => state.todoList[todo] === false
    );
  }, [state.todoList]);

  const addTodoList = () => {
    todoText !== "" &&
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
      <input value={todoText} onChange={(e) => setTodoText(e.target.value)} />
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
