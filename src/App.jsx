import { useState, useEffect } from 'react';
import './App.css';
import cards from './components/data';
import Home from './views/Home';
import AddCard from './views/AddCard';

function App() {
  const [wallet, setWallet] = useState(cards);

  useEffect(() => {
    const myWallet = JSON.parse(localStorage.getItem('my-wallet'));

    if (myWallet) {
      setWallet(myWallet);
    }
  }, []);

  function addCard(card) {
    if (wallet.length > 10) return;
    // setWallet((prevWallet) => [...prevWallet, card]);
    const newWallet = [...wallet, card];
    setWallet(newWallet);
    localStorage.setItem('my-wallet', JSON.stringify(newWallet));
  }

  return (
    <div className="App">
      <Home cards={wallet} />
      <AddCard addCard={addCard} />
    </div>
  );
}

export default App;
