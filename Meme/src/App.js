import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Meme } from './components/Meme';
import "./style.css"
import React from 'react';

function App() {
  /* declare a use state */
  React.useState()
  return (
    <div className="App">
      <Header/>
      <Meme/>
    </div>
  );
}

export default App;
