import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloForm from './SayingHello/HelloForm';
import CharacterCounter from './CountingCharacters/CharacterCounter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h2>Saying Hello</h2>
        <HelloForm />

        <h2>Counting the Number of Characters</h2>
        <CharacterCounter />
      </div>
    );
  }
}

export default App;
