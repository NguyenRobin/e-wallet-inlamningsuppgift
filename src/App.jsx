import { useState, useEffect } from 'react';
import './App.css';
import cards from './components/data';
import Home from './views/Home';
import AddCard from './views/AddCard';

function App() {
  const [wallet, setWallet] = useState(cards);
  console.log(wallet);

  function addCard(card) {
    // setWallet([card, ...wallet]);
    setWallet((prevWallet) => [...prevWallet, card]);
    console.log(wallet);
  }

  return (
    <div className="App">
      <Home cards={wallet} />
      <AddCard addCard={addCard} />
    </div>
  );
}

export default App;
