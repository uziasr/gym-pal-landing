import React from 'react';
import logo from './logo.svg';
import './App.scss';
import NavBar from './components/NavBar'
import Home from './components/Home'
import Features from './components/Features'
import AdditionalFeatures from './components/AdditionalFeatures'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Features/>
      <AdditionalFeatures/>
    </div>
  );
}

export default App;
