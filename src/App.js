import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import { addTodo } from './reducers/todos/action-creators';

class App extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleAddTodo} >
          <input type='text' name='todo' />
          <button type='submit'>ADD</button>
        </form>

        <ul>
          {this.props.todos.map( (todo) => (
            <li 
              key={todo.id} 
              style={{textDecoration:todo.completed ? 'line-through' : 'none'}}>
              {todo.text}
            </li>  
          ))}
        </ul>

        <div>
          <h3>Show</h3>
          <span>All</span> | <a href='#'>Done</a> | <a href='#'>To do</a> 
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state
})

const mapDispatchToProps = (dispatch) => ({
  handleAddTodo: (e) => {
    e.preventDefault()
    dispatch(addTodo(e.target.todo.value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
