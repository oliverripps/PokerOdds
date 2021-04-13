import React, { useState } from 'react';
import { CardGroup, OddsCalculator } from 'poker-odds-calculator';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

function Odds() {
  const seenCards = ['5h', '4h'];
  let allCards = new Set();
  const cardvals = [
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'T',
    'J',
    'Q',
    'K',
    'A',
  ];
  const suitevals = ['d', 'c', 'h', 's'];
  cardvals.forEach((cardval) => {
    suitevals.forEach((suiteval) => {
      let currCard = cardval + suiteval;
      if (seenCards.indexOf(currCard) === -1) {
        allCards.add(currCard);
      }
    });
  });
  let allCardArray = Array.from(allCards);
  let allHands = new Set();

  //We need to take in the number of players that are playing in the hand. Create a list of all of the combinations of hands x amount of other players could have.
  // We then count how many of the hands we had the highest odds, how many we didn't and how many we tied. Thats the %s.
  allCardArray.forEach((card1) => {
    allCardArray.forEach((card2) => {
      let reverse = card2 + card1;
      let currHand = card1 + card2;
      if (
        card1 !== card2 &&
        !allHands.has(reverse) &&
        !allHands.has(currHand)
      ) {
        allHands.add(currHand);
      }
    });
  });
  let allHandArray = Array.from(allHands);
  let allHandInput = new Set();
  allHandArray.forEach((hand) => {
    allHandInput.add(CardGroup.fromString(hand));
  });
  let allHandInputArray = Array.from(allHandInput);
  console.log(allHandInput);
  const result = OddsCalculator.calculate(allHandInputArray);
  const [playerCards, setCards] = useState({ player: '', cards: [], odds: '' });
  const [name, setName] = useState('');
  const [card, setCard] = useState({
    value: '',
    suite: '',
  });
  const [card2, setCard2] = useState({
    value: '',
    suite: '',
  });

  //const [board, setBoard] = useState(bboard);

  /*  result = OddsCalculator.calculate(
    [playerCards.cards[0], playerCards.cards[1]],
    bboard
  ); */
  const handleChangeValue = (event) => {
    console.log(event);
    let val = event.target.value;
    let suite = card.suite;
    setCard({ value: val, suite: suite });
  };
  const handleChangeSuite = (event) => {
    let suite = event.target.value;
    let val = card.value;
    setCard({ value: val, suite: suite });
  };
  const handleChangeValue2 = (event) => {
    console.log(event);
    let val = event.target.value;
    let suite = card.suite;
    setCard2({ value: val, suite: suite });
  };
  const handleChangeSuite2 = (event) => {
    let suite = event.target.value;
    let val = card.value;
    setCard2({ value: val, suite: suite });
  };
  const changeName = (event) => {
    setName(event.target.value);
  };
  const handleSubmit = () => {
    let cardOne = card.value + card.suite;
    let cardTwo = card2.value + card2.suite;
    setCards({});
  };
  const cardValues = [
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
    { value: '8', label: '8' },
    { value: '9', label: '9' },
    { value: 'T', label: '10' },
    { value: 'J', label: 'Jack' },
    { value: 'Q', label: 'Queen' },
    { value: 'K', label: 'King' },
    { value: 'A', label: 'Ace' },
  ];
  const suites = [
    { value: 'd', label: 'Diamonds' },
    { value: 'c', label: 'Club' },
    { value: 'h', label: 'Hearts' },
    { value: 's', label: 'Spades' },
  ];
  //   const player1Odds = result.equities[0].getEquity();
  //   console.log(player1Odds);
  //   const player2Odds = result.equities[1].getEquity();
  //   console.log(player2Odds);
  return (
    <div>
      <TextField
        value={name}
        onChange={changeName}
        label="Player Name"
      ></TextField>
      <InputLabel>Card Value</InputLabel>
      <Select value={card.value} onChange={handleChangeValue}>
        {cardValues.map((card) => {
          return <MenuItem value={card.value}> {card.label} </MenuItem>;
        })}
      </Select>
      <Select value={card.suite} onChange={handleChangeSuite}>
        {suites.map((suite) => {
          return <MenuItem value={suite.value}> {suite.label} </MenuItem>;
        })}
      </Select>
      <Select value={card2.value} onChange={handleChangeValue2}>
        {cardValues.map((card) => {
          return <MenuItem value={card.value}> {card.label} </MenuItem>;
        })}
      </Select>
      <Select value={card.suite} onChange={handleChangeSuite2}>
        {suites.map((suite) => {
          return <MenuItem value={suite.value}> {suite.label} </MenuItem>;
        })}
      </Select>
      <Button onClick={handleSubmit}>Add Card</Button>
    </div>
  );
}

export default Odds;
