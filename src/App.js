import React, { Component } from 'react';
import './App.css';
import Form from './components/form/index'
import TodosList from './components/todos-list/index'
import Filter from './components/filter/index'
import { StyledApp } from './style'

class App extends Component {
  render() {
    return (
      <StyledApp>
        <Form/>
        <TodosList/>
        <Filter/>
      </StyledApp>
    );
  }
}

export default App
