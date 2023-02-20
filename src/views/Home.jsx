import React, { useState, useEffect } from 'react';
import Top from '../components/Top';
import './Home.css';
import Card from '../components/Card';
import CardStack from '../components/CardStack';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

function Home({ myWalletWithCards, removeCardFromWallet }) {
  const [myCard, setMyCard] = useState(myWalletWithCards);
  const [deleteCardText, setDeleteCardText] = useState(false);
  const navigate = useNavigate();
  function activeCard(card) {
    setMyCard(card);
    console.log(card);
  }

  function isDeleted() {
    removeCardFromWallet(myCard.id);
    setMyCard({});
  }

  function goToAddNewCard() {
    navigate('/addCard');
  }

  return (
    <article className="home">
      <Top title="E-WALLET" type="ACTIVE CARD" />

      {myWalletWithCards.length === 0 ? (
        <Card cardNumber="NO ACTIVE CARD" />
      ) : (
        <Card
          removeCardFromWallet={() => isDeleted()}
          deleteCardText={() => setDeleteCardText(true)}
          className={myCard.card}
          wifiLogo={myCard.images?.wifi}
          vendorsLogo={myCard.images?.vendors}
          chipLogo={myCard.images?.chip}
          cardNumber={myCard.cardNumber ? myCard.cardNumber : 'PICK A CARD'}
          name={myCard.name}
          valid={myCard.valid}
          cardColor={myCard.cardColor}
          textColor={myCard.textColor}
        />
      )}

      <CardStack
        activeCard={activeCard}
        myWalletWithCards={myWalletWithCards}
      />
      <Button
        type="button"
        onClick={goToAddNewCard}
        btnTextTitle="ADD NEW CARD"
      />
    </article>
  );
}

export default Home;
