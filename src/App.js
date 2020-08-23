import React from 'react';
import logo from './logo.svg';
import './App.scss';
import NavBar from './components/NavBar'
import Home from './components/Home'
import Features from './components/Features'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Features/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
