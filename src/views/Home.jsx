import React, { useState } from 'react';
import Top from '../components/Top';
import './Home.css';
import Card from '../components/Card';
import CardStack from '../components/CardStack';
import Button from '../components/Button';

function Home({ cards }) {
  const [textColor, setTextColor] = useState('#000');
  const [myCard, setMyCard] = useState(cards);

  function activeCard(card) {
    setMyCard(card);
    console.log(card);
  }

  return (
    <article className="home">
      <Top title="E-WALLET" type="ACTIVE CARD" />
      <Card
        // textColor={textColor}
        wifiLogo={myCard.images?.wifi}
        vendorsLogo={myCard.images?.vendors}
        chipLogo={myCard.images?.chip}
        className={myCard.card}
        cardNumber={myCard.cardNumber}
        name={myCard.name}
        valid={myCard.valid}
        cardColor={myCard.cardColor}
      />
      <CardStack activeCard={activeCard} textColor={textColor} cards={cards} />
      <Button btnText="ADD NEW CARD" />
    </article>
  );
}

export default Home;
