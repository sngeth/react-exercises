import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="album text-muted">
      <div className="container">
        <div className="row">
          <div className="col">
            <Link to={{ pathname: '/saying_hello' }}>
              Saying Hello
            </Link>
            <p>Tell me your name and I'll say Hello</p>
          </div>
          <div className="col">
            <Link to={{ pathname: '/counting_characters' }}>
              Counting Characters
            </Link>
            <p>Give me some text and i'll count the number of characters</p>
          </div>
          <div className="col">
            <Link to={{ pathname: '/printing_quotes' }}>
              Printing Quotes
            </Link>
            <p>Print a quote</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Link to={{ pathname: '/mad_lib' }}>
              Mad Lib
            </Link>
            <p>Generate a mad lib</p>
          </div>
          <div className="col">
            <Link to={{ pathname: '/simple_math' }}>
             Simple Math
            </Link>
            <p>Do some basic addition, subtraction, multiplication, and division</p>
          </div>
          <div className="col">
            <Link to={{ pathname: '/retirement_calculator' }}>
             Retirement Calculator
            </Link>
            <p>Calculate the years and date until retirement</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Link to={{ pathname: '/room_area' }}>
             Area of a Rectangular Room
            </Link>
            <p>Calculate Room Area in Sq. Ft and Sq. M</p>
          </div>
          <div className="col">
            <Link to={{ pathname: '/pizza_party' }}>Pizza Party</Link>
            <p>Plan a pizza party</p>
          </div>
          <div className="col">
            <Link to={{ pathname: '/paint_calculator' }}>Paint Calculator</Link>
            <p>Calculate paint needed to paint a room</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Link to={{ pathname: '/self_checkout' }}>Self Checkout</Link>
            <p>Simple check-out system</p>
          </div>
          <div className="col">
            <Link to={{ pathname: '/currency_conversion' }}>Currency Conversion</Link>
            <p>Convert Euros to USD</p>
          </div>
          <div className="col">
            <Link to={{ pathname: '/simple_interest' }}>Simple Interest</Link>
            <p>Computes simple interest</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Link to={{ pathname: '/compound_interest' }}>Compound Interest</Link>
            <p>Computes simple interest</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
