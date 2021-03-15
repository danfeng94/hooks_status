import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "./context";

const Main = observer(() => {
  const store = useStore();
  const [todoText, setTodoText] = useState("");

  const addTodo = (todo) => {
    store.ADD_TODOLIST(todo);
    setTodoText("");
  };
  const toggleTodo = (todo) => {
    store.TOGGLE_TODOLIST(todo);
  };

  return (
    <div>
      <input value={todoText} onChange={(ev) => setTodoText(ev.target.value)} />
      <button type="button" onClick={() => addTodo(todoText)}>
        增加待办事项
      </button>
      <ul>
        {store.pendingTodos.map((todo) => {
          return (
            <li key={todo} onClick={() => toggleTodo(todo)}>
              {todo}
            </li>
          );
        })}
        {store.doneTodos.map((todo) => {
          return (
            <li
              key={todo}
              style={{ textDecoration: "line-through" }}
              onClick={() => toggleTodo(todo)}
            >
              {todo}
            </li>
          );
        })}
      </ul>
    </div>
  );
});

export default Main;
