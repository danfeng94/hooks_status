import { observable } from "mobx";

const store = observable({});

export function createStore() {
  return {
    todoList: store,
    get pendingTodos() {
      return Object.keys(this.todoList).filter(
        (todo) => this.todoList[todo] === false
      );
    },
    get doneTodos() {
      return Object.keys(this.todoList).filter(
        (todo) => this.todoList[todo] === true
      );
    },
    ADD_TODOLIST(todo) {
      this.todoList[todo] = false;
    },
    TOGGLE_TODOLIST(todo) {
      this.todoList[todo] = !this.todoList[todo];
    },
  };
}
