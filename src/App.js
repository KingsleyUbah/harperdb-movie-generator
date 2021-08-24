import React from 'react';
import './App.css';
import Movie from './components/Movie';

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <header>
          <h1 className="heading">Movie List</h1>
          <h3> A Simple Movie Generator built with React and HarperDB</h3>
        </header>
        <div>
          <Movie />
        </div>
      </div>
    </div>
  );
}

export default App;
