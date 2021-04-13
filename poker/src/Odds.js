import React, { useState } from 'react';
import { CardGroup, OddsCalculator } from 'poker-odds-calculator';

function Odds() {
  const player1Cards = CardGroup.fromString('Tc4c');
  const player2Cards = CardGroup.fromString('Jd7c');
  const bboard = CardGroup.fromString('Ts4dJs');
  const [playerCards, setCards] = useState({
    players: ['player1', 'player2'],
    cards: [player1Cards, player2Cards],
    odds: [],
  });

  //const [board, setBoard] = useState(bboard);

  const result = OddsCalculator.calculate(
    [playerCards.cards[0], playerCards.cards[1]],
    bboard
  );
  const handleSubmit = () => {
    console.log(playerCards.odds);
  };
  const player1Odds = result.equities[0].getEquity();
  console.log(player1Odds);
  const player2Odds = result.equities[1].getEquity();
  console.log(player2Odds);
  return (
    <div>
      <form onSubmit={handleSubmit}></form>
      <p>Player 1 odds: {player1Odds}</p>
      <p>Play 2 odds: {player2Odds}</p>
    </div>
  );
}

export default Odds;
