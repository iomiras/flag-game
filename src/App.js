import './App.css'
import React from 'react';
import { useState, useEffect } from 'react';

import './App.css';
import { flags } from './data';

function App() {

  const [randomFlag, setRandomFlag] = useState([]); //city that is being guessed
  const [started, setStarted] = useState(false);
  const [show, setShow] = useState(false)

  function getFlag() {
    setRandomFlag(flags[Math.floor(Math.random() * flags.length)])
    setStarted(true);
    setShow(false);
  }

  function showAnswer() {
    setShow(true);
  }



  return (
    <div className="App">
      <div className='Game'>
        <h1 className={show ? 'Correct' : 'disable Correct'} >{randomFlag.name}</h1>
        <h1 className='Flag'>{randomFlag.emoji}</h1>
        <div className='ButtonHolder'>
          <button className='Button Answer' onClick={showAnswer} disabled={!started ? true : false}>Correct answer</button>
          <button className='Button Next' onClick={getFlag}>{!started ? 'Start' : 'Next'}</button>
        </div>
      </div>
    </div >
  );
}

export default App;
