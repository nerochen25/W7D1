import React from 'react';
import { uniqueId } from '../../util/uniqueId.js';

class TodoForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      id: uniqueId(),
      title: '',
      body: '',
      done: false
    };
  
  this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const todo = Object.assign({}, this.state);
    this.props.receiveTodo(todo);
    this.setState({id: uniqueId(), title: '', body: ''});
    
  }
  
  render() {
    
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <br/>
          <input value={this.state.title} onChange={this.update('title')}></input>
        </label>
        <br/><br/>
        <label>
          Body:
          <br/>
          <textarea value={this.state.body} onChange={this.update('body')}></textarea>
        </label>
        <br/>
        <input type="submit" value="Submit your ToDo item"></input>
      </form>
    );
    
  }
}

export default TodoForm;