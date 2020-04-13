import React from 'react';
import logo from './logo.svg';
import './App.css';

const getData = () => {
  fetch('http://localhost:3001/')
    .then(response => {
      return 'response'
    })
    .catch(error => {
      console.log('Deu erro porra.');
    })
    .finally(() => {
      return 'deu merda'
    });
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {getData()}
        </a>
      </header>
    </div>
  );
}

export default App;
