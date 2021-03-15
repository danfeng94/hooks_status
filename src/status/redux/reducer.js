const initState = {
  todoList: {},
};

const reducer = (state = initState, action) => {
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

export default reducer;
