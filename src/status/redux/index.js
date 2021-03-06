import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Main from "./main";
import reducer from "./reducer";

const store = createStore(reducer);

function TodoList() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default TodoList;
