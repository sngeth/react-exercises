import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="album text-muted">
      <div className="container">
        <div className="row">
          <div className="card">
            <Link to={{ pathname: '/saying_hello' }}>
              Saying Hello
            </Link>
            <p className="card-text">Tell me your name and I'll say Hello</p>
          </div>

          <div className="card">
            <Link to={{ pathname: '/counting_characters' }}>
              Counting Characters
            </Link>
            <p className="card-text">Give me some text and i'll count the number of characters</p>
          </div>

          <div className="card">
            <Link to={{ pathname: '/printing_quotes' }}>
              Printing Quotes
            </Link>
            <p className="card-text">Print a quote</p>
          </div>

          <div className="card">
            <Link to={{ pathname: '/mad_lib' }}>
              Mad Lib
            </Link>
            <p className="card-text">Generate a mad lib</p>
          </div>

          <div className="card">
            <Link to={{ pathname: '/simple_math' }}>
             Simple Math
            </Link>
            <p className="card-text">Do some basic addition, subtraction, multiplication, and division</p>
          </div>
          <div className="card">
            <Link to={{ pathname: '/retirement_calculator' }}>
             Retirement Calculator
            </Link>
            <p className="card-text">Calculate the years and date until retirement</p>
          </div>

          <div className="card">
            <Link to={{ pathname: '/room_area' }}>
             Area of a Rectangular Room
            </Link>
            <p className="card-text">Calculate Room Area in Sq. Ft and Sq. M</p>
          </div>
          <div className="card">
            <Link to={{ pathname: '/pizza_party' }}>Pizza Party</Link>
            <p className="card-text">Plan a pizza party</p>
          </div>
          <div className="card">
          <Link to={{ pathname: '/paint_calculator' }}>Paint Calculator</Link>
            <p className="card-text">Calculate paint needed to paint a room</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home;
