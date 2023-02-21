import React, { useState } from 'react';
import Top from '../components/Top';
import './Home.css';
import Card from '../components/Card';
import CardStack from '../components/CardStack';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

function Home({ myWalletWithCards, deleteCardFromWallet }) {
  const [activeCard, setActiveCard] = useState(myWalletWithCards);
  const [deleteCardText, setDeleteCardText] = useState(false);
  const navigate = useNavigate();

  function displayActiveCard(activeCard) {
    setActiveCard(activeCard);
    console.log(activeCard);
  }

  function deleteActiveCard() {
    deleteCardFromWallet(activeCard.id);
    setActiveCard({});
  }

  function goToAddNewCard() {
    navigate('/addCard');
  }

  const displayCard =
    myWalletWithCards.length === 0 ? (
      <Card cardNumber="NO ACTIVE CARD" />
    ) : (
      <Card
        deleteCardFromWallet={deleteActiveCard}
        deleteCardText={() => setDeleteCardText(true)}
        wifiLogo={activeCard.images?.wifi}
        vendorsLogo={activeCard.images?.vendors}
        chipLogo={activeCard.images?.chip}
        cardNumber={
          activeCard.cardNumber ? activeCard.cardNumber : 'PICK A CARD'
        }
        name={activeCard.name}
        valid={activeCard.valid}
        cardColor={activeCard.cardColor}
        textColor={activeCard.textColor}
      />
    );

  return (
    <article className="home">
      <Top title="E-WALLET" textTitle="ACTIVE CARD" />
      {displayCard}
      <CardStack
        displayActiveCard={displayActiveCard}
        myWalletWithCards={myWalletWithCards}
      />
      <Button onClick={goToAddNewCard} btnTextTitle="ADD NEW CARD" />
    </article>
  );
}

export default Home;
