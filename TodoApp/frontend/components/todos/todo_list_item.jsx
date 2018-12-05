import React from 'react';


class TodoListItem extends React.Component {
  
  render() {
    const todoItemTitle = this.props.todo;
    return (
      <li>
        { todoItemTitle }
      </li>
    );
  }
  
}

export default TodoListItem;