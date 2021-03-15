import React from "react";
import { Provider } from "./context";
import Main from "./main";

function TodoList() {
  return (
    <Provider>
      <Main />
    </Provider>
  );
}

export default TodoList;
