import React, { useState } from 'react';
import Top from '../components/Top';
import './Home.css';
import Card from '../components/Card';
import CardStack from '../components/CardStack';
import Button from '../components/Button';

function Home({ cards }) {
  const [textColor, setTextColor] = useState('#000');

  const [vendorLogo, setVendorLogo] = useState('bitcoin');
  const [background, setBackground] = useState('#D0D0D0');
  const [chip, setChip] = useState('chip 2');
  const [wifi, setWifi] = useState('1');

  // test
  const [myCard, setMyCard] = useState(cards);

  // function TESTAR(card) {
  //   setTextColor(card.);
  //   setVendorLogo();
  //   setBackground();
  //   setChip();
  //   setWifi();
  // }

  function activeCard(card) {
    setMyCard(card);
    console.log(card.name);
  }
  console.log(myCard.images);

  return (
    <article className="home">
      <Top title="E-WALLET" type="ACTIVE CARD" />
      {/* <Card
        textColor={textColor}
        wifiLogo="./public/images/noun_wifi_159786 1.svg"
        chipLogo="public/images/chip.svg"
        name="ROBIN NGUYEN"
        valid="10/25"
        cardNumber="1234 5676 9101 1123"
        vendorsLogo="./public/images/vendor-bitcoin.svg"
      /> */}

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

      {/* <Card onClick={myCard} /> */}

      {/* <Card
      className={myCard.card}
      key={index}
      wifiLogo={card.images.wifi}
      chipLogo={card.images.chip}
      name={card.name}
      valid={card.valid}
      vendorsLogo={card.images.vendors}
      cardNumber={card.cardNumber}
      cardColor={card.cardColor}
      index={index}
      /> */}

      <CardStack activeCard={activeCard} textColor={textColor} cards={cards} />
      <Button btnText="ADD NEW CARD" />
    </article>
  );
}

export default Home;
