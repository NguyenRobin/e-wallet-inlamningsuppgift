import { useState, useEffect } from 'react';
import './App.css';
import myWalletWithCards from './components/data';
import Home from './views/Home';
import AddCard from './views/AddCard';

function App() {
  const [wallet, setWallet] = useState(myWalletWithCards);
  const [deleteCard, setDeleteCard] = useState(false);
  useEffect(() => {
    const myWallet = JSON.parse(localStorage.getItem('my-wallet'));
    if (myWallet) {
      setWallet(myWallet);
    }
  }, []);

  function addCardToWallet(card) {
    // if (wallet.length > 10) return;
    // setWallet((prevWallet) => [...prevWallet, card]);
    const newWallet = [...wallet, card];
    setWallet(newWallet);
    localStorage.setItem('my-wallet', JSON.stringify(newWallet));
  }

  function removeCardFromWallet(id) {
    setWallet(wallet.filter((card) => card.id !== id));
    console.log(wallet);
  }

  return (
    <div className="App">
      <Home
        deleteCard={deleteCard}
        removeCardFromWallet={removeCardFromWallet}
        myWalletWithCards={wallet}
      />
      <AddCard addCardToWallet={addCardToWallet} />
    </div>
  );
}

export default App;
