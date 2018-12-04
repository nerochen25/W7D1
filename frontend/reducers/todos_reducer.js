import merge from 'lodash/merge';
import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions.js';
import { receiveTodo } from '../actions/todo_actions.js';

const newTodos = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

export const todosReducer = (state = newTodos, {todo, type, todos}) => {
  Object.freeze(state);
  let newState;
  switch(type) {
    case RECEIVE_TODOS:
      newState = {};
      todos.forEach((todo) => {
        newState[todo.id] = todo;
      });
      return newState;
    case RECEIVE_TODO:
      newState = merge({}, state);
      newState[todo.id] = todo;
      return newState;
    default: 
      return state;
  }
};