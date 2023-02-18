import React, { useState } from 'react';
import Top from '../components/Top';
import './Home.css';
import Card from '../components/Card';
import CardStack from '../components/CardStack';
import Button from '../components/Button';

function Home({ myWalletWithCards, removeCardFromWallet, deleteCard }) {
  const [textColor, setTextColor] = useState('#000');
  const [myCard, setMyCard] = useState(myWalletWithCards);

  function activeCard(card) {
    setMyCard(card);
    console.log(card);
  }

  return (
    <article className="home">
      <Top title="E-WALLET" type="ACTIVE CARD" />
      <Card
        // textColor={textColor}
        deleteCard={() => deleteCard(true)}
        onClick={() => removeCardFromWallet(myCard.id)}
        wifiLogo={myCard.images?.wifi}
        vendorsLogo={myCard.images?.vendors}
        chipLogo={myCard.images?.chip}
        className={myCard.card}
        cardNumber={myCard.cardNumber}
        name={myCard.name}
        valid={myCard.valid}
        cardColor={myCard.cardColor}
      />
      <CardStack
        activeCard={activeCard}
        textColor={textColor}
        myWalletWithCards={myWalletWithCards}
      />
      <Button btnText="ADD NEW CARD" />
    </article>
  );
}

export default Home;
