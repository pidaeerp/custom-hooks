export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "[TODO] Add Todo":
      //throw new Error("Action.type = ABC no esta implementado");
      return [...initialState, action.payload];
      break;
    case "[TODO] Remove Todo":
      return initialState.filter((todo) => todo.id !== action.payload);
      break;
    case "[TODO] Toggle Todo":
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });

      break;
    default:
      return initialState;
      break;
  }
};
