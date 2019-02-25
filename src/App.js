import React, { Component } from 'react';
import './App.css';
import Form from './components/form/index'
import TodosList from './components/todos-list/index'
import Filter from './components/filter/index'
import SearchCep from './components/search-cep/index'
import { StyledApp } from './style'

class App extends Component {
  render() {
    return (
      <StyledApp>
        <div>
          <Form/>
          <TodosList/>
          <Filter/>
        </div>
        <div>
          <SearchCep />
        </div>
      </StyledApp>
    );
  }
}

export default App
