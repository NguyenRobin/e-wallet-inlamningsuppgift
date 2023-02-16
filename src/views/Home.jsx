import React from 'react';
import Top from '../components/Top';
import './Home.css';
import Card from '../components/Card';
import CardStack from '../components/CardStack';
import Button from '../components/Button';

function Home({ cards }) {
  return (
    <article className="home">
      <Top title="E-WALLET" type="ACTIVE CARD" />
      <Card
        wifiLogo="./public/images/noun_wifi_159786 1.svg"
        chipLogo="public/images/chip.svg"
        name="ROBIN NGUYEN"
        valid="10/25"
        cardNumber="1234 5676 9101 1123"
        vendorsLogo="./public/images/vendor-bitcoin.svg"
      />
      <CardStack cards={cards} />
      <Button btnText="ADD NEW CARD" />
    </article>
  );
}

export default Home;
