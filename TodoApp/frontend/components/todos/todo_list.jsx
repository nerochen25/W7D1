import React from 'react';
import TodoListItem from './todo_list_item.jsx';
import TodoForm from './todo_form.jsx';

class TodoList extends React.Component {
  
  render() {
    const { todos, receiveTodo } = this.props;
    const todoitems = todos.map((todo, i) => {
      return <TodoListItem key={i} todo={ todo.title }/>;
    });
    // console.log(todoitems);
    
    return (
      <div>
        <ul>
          { todoitems }
        </ul>
        <TodoForm receiveTodo={ receiveTodo }/>
      </div>
    );
  }
}

export default TodoList;
