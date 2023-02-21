import { useState, useEffect } from 'react';
import './App.css';
import myWalletWithCards from './components/data';
import Home from './views/Home';
import AddCard from './views/AddCard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
      localStorage.setItem('my-wallet', JSON.stringify(newWalletAddedCard));
      return newWalletAddedCard;
    });
  }

  function deleteCardFromWallet(id) {
    setWallet((prevWallet) => {
      const newWalletRemovedCard = prevWallet.filter((card) => card.id !== id);
      localStorage.setItem('my-wallet', JSON.stringify(newWalletRemovedCard));
      return newWalletRemovedCard;
    });
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                deleteCardFromWallet={deleteCardFromWallet}
                myWalletWithCards={wallet}
              />
            }
          />
          <Route
            path="/addcard"
            element={<AddCard addCardToWallet={addCardToWallet} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
