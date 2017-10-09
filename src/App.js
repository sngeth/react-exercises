import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloForm from './SayingHello/HelloForm';
import CharacterCounter from './CountingCharacters/CharacterCounter';
import Quoter from './PrintingQuotes/Quoter';
import MadLib from './MadLib/MadLib';
import SimpleMath from './SimpleMath/SimpleMath';
import RetirementCalculator from './RetirementCalculator/RetirementCalculator';
import { Switch, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <nav className="nav">
          <Link className="nav-link" to={{ pathname: '/saying_hello' }}>
            Saying Hello
          </Link>
          <Link className="nav-link" to={{ pathname: '/counting_characters' }}>
            Counting Characters
          </Link>
          <Link className="nav-link" to={{ pathname: '/printing_quotes' }}>
            Printing Quotes
          </Link>
          <Link className="nav-link" to={{ pathname: '/mad_lib' }}>
            Mad Lib
          </Link>
          <Link className="nav-link" to={{ pathname: '/simple_math' }}>
           Simple Math
          </Link>
          <Link className="nav-link" to={{ pathname: '/retirement_calculator' }}>
           Retirement Calculator
          </Link>
        </nav>

        <div className="container">
          <Switch>
            <Route path='/saying_hello' component={HelloForm}/>
            <Route path='/counting_characters' component={CharacterCounter}/>
            <Route path='/printing_quotes' component={Quoter}/>
            <Route path='/mad_lib' component={MadLib}/>
            <Route path='/simple_math' component={SimpleMath}/>
            <Route path='/retirement_calculator' component={RetirementCalculator}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
