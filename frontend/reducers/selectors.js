export const allTodos = (state) => {
  let todosKeys = Object.keys(state.todos);
  let todosArray = [];
  todosKeys.forEach((key) => {
    key = parseInt(key);
    todosArray.push(state.todos[key]);
  });
  return todosArray;
};