import React from 'react';
import { connect } from 'react-redux';
import { allTodos } from '../../reducers/selectors.js';
import { receiveTodo } from '../../actions/todo_actions.js';
import TodoList from './todo_list.jsx';

const mapStateToProps = state => ({
  todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: todo => dispatch(receiveTodo(todo))
});


export default connect (mapStateToProps, mapDispatchToProps)(TodoList);