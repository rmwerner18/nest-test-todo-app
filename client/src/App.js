import React from 'react';
import './App.css';
import TodoCardContainer from './containers/TodoCardContainer';

const App = () => {
  return (
    <div className="App">
      <h1>To-Do</h1>
      <TodoCardContainer />
    </div>
  );
}

export default App;
