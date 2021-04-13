// Using odds calculator from https://github.com/rundef/node-poker-odds-calculator

import './App.css';
import Odds from './Odds.js';
import React, { useState } from 'react';
import { CardGroup, OddsCalculator } from 'poker-odds-calculator';

function App() {
  return <Odds />;
}

export default App;
