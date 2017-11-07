import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Home from './Shared/Home';
import HelloForm from './SayingHello/HelloForm';
import CharacterCounter from './CountingCharacters/CharacterCounter';
import Quoter from './PrintingQuotes/Quoter';
import MadLib from './MadLib/MadLib';
import SimpleMath from './SimpleMath/SimpleMath';
import RetirementCalculator from './RetirementCalculator/RetirementCalculator';
import RoomArea from './RoomArea/RoomArea';
import PizzaParty from './PizzaParty/PizzaParty';
import PaintCalculator from './PaintCalculator/PaintCalculator';

class App extends Component {
  render() {
    return (
      <div>
        <section className="jumbotron text-center">
            <div className="container">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </div>
        </section>
        <Switch>
          <Route exact path='/' component={Home}/>
          <div className="container">
            <Route path='/saying_hello' component={HelloForm}/>
            <Route path='/counting_characters' component={CharacterCounter}/>
            <Route path='/printing_quotes' component={Quoter}/>
            <Route path='/mad_lib' component={MadLib}/>
            <Route path='/simple_math' component={SimpleMath}/>
            <Route path='/retirement_calculator' component={RetirementCalculator}/>
            <Route path='/room_area' component={RoomArea}/>
            <Route path='/pizza_party' component={PizzaParty}/>
            <Route path='/paint_calculator' component={PaintCalculator}/>
          </div>
        </Switch>
      </div>
    );
  }
}

export default App;
