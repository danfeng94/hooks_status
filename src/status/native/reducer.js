export const initState = {
  todoList: {
    name: false,
    age: false,
  },
};

export const reducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case "ADD_TODOLIST": {
      state.todoList[payload.todo] = false;
      return {
        todoList: { ...state.todoList },
      };
    }
    case "DELETE_TODOLIST": {
      state.todoList[payload.todo] = true;
      return {
        todoList: { ...state.todoList },
      };
    }
    default:
      return state;
  }
};

const reducerElement = { reducer, initState };
export default reducerElement;
