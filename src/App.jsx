import { useState, useEffect } from 'react';
import './App.css';
import myWalletWithCards from './components/data';
import Home from './views/Home';
import AddCard from './views/AddCard';

function App() {
  const [wallet, setWallet] = useState(myWalletWithCards);

  useEffect(() => {
    const myWallet = JSON.parse(localStorage.getItem('my-wallet'));
    if (myWallet) {
      setWallet(myWallet);
    }
  }, []);

  function addCardToWallet(card) {
    if (wallet.length > 10) return;

    setWallet((prevWallet) => {
      const id = wallet.length;
      const walletWithID = { id, ...card };
      const newWalletAddedCard = [...prevWallet, walletWithID];
      localStorage.setItem('my-wallet', JSON.stringify(newWallet));
      return newWalletAddedCard;
    });
  }

  function removeCardFromWallet(id) {
    setWallet((prevWallet) => {
      const newWalletRemovedCard = prevWallet.filter((card) => card.id !== id);
      localStorage.setItem('my-wallet', JSON.stringify(newWalletRemovedCard));
      return newWalletRemovedCard;
    });
  }

  return (
    <div className="App">
      <Home
        removeCardFromWallet={removeCardFromWallet}
        myWalletWithCards={wallet}
      />
      <AddCard addCardToWallet={addCardToWallet} />
    </div>
  );
}

export default App;
