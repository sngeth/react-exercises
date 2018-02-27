import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './Shared/Home';
import HelloForm from './Components/HelloForm';
import CharacterCounter from './Components/CharacterCounter';
import Quoter from './Components/Quoter';
import MadLib from './Components/MadLib';
import SimpleMath from './Components/SimpleMath';
import RetirementCalculator from './Components/RetirementCalculator';
import RoomArea from './Components/RoomArea';
import PizzaParty from './Components/PizzaParty';
import PaintCalculator from './Components/PaintCalculator';
import SelfCheckout from './Components/SelfCheckout';
import CurrencyConversion from './Components/CurrencyConversion';
import SimpleInterest from './Components/SimpleInterest';
import CompoundInterest from './Components/CompoundInterest';
import TaxCalculator from './Components/TaxCalculator';

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
            <Route path='/self_checkout' component={SelfCheckout}/>
            <Route path='/currency_conversion' component={CurrencyConversion}/>
            <Route path='/simple_interest' component={SimpleInterest}/>
            <Route path='/compound_interest' component={CompoundInterest}/>
            <Route path='/tax_calculator' component={TaxCalculator}/>
          </div>
        </Switch>
      </div>
    );
  }
}

export default App;
