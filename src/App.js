import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <input type='text' />

        <ul>
          <li style={{textDecoration:'line-through'}}>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>

        <div>
          <h3>Show</h3>
          <span>All</span> | <a href='#'>Done</a> | <a href='#'>To do</a> 
        </div>

      </div>
    );
  }
}

export default App;
