import React, { Component } from 'react';
import './App.css';
import Form from './components/form/index'
import TodosList from './components/todos-list/index'
import Filter from './components/filter/index'

class App extends Component {
  render() {
    return (
      <div>
        <Form/>
        <TodosList/>
        <Filter/>
      </div>
    );
  }
}

export default App
