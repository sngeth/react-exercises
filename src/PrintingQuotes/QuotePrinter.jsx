import React from 'react';

const QuotePrinter = ({quote, author}) => {
  return (
    <blockquote>
        <p>"{quote}"</p>
        <footer>--{author}</footer>
    </blockquote>
  )
}

export default QuotePrinter;
