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
    </div>
  );
}

export default App;
