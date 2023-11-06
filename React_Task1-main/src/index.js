import React from 'react';
import ReactDOM from 'react-dom';
import WordCounter from './App'; // Assuming App.js is in the same directory

const App = () => {
  return (
    <div>
      <h1>Responsive paragraph word counter</h1>
      <WordCounter />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));