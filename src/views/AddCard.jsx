import React, { useState } from 'react';
import './AddCard.css';
import Top from '../components/Top';
import Card from '../components/Card';
import CardForm from '../components/CardForm';
function AddCard({ addCard }) {
  const [vendor, setVendor] = useState('bitcoin');
  const [background, setBackground] = useState('#D0D0D0');

  const [chip, setChip] = useState('chip 2');

  function changeCardHandler(vendorLogo) {
    if (vendorLogo === 'defaultCard') {
      setVendor('bitcoin');
    } else {
      setVendor(vendorLogo);
    }
  }

  function changeBackgroundCard(vendorLogo) {
    if (vendorLogo === 'defaultCard') {
      setBackground('#D0D0D0');
      setChip('chip 2');
    } else if (vendorLogo === 'bitcoin') {
      setBackground('#ffae34');
      setChip('chip');
    } else if (vendorLogo === 'blockchain') {
      setBackground('#8B58F9');
      setChip('chip');
    } else if (vendorLogo === 'evil') {
      setBackground('#F33355');
      setChip('chip');
    } else if (vendorLogo === 'ninja') {
      setBackground('#222222');
      setChip('chip');
    }
  }

  return (
    <article className="addCard">
      <Top title="ADD A NEW BANK CARD" type="NEW CARD" />
      <Card
        wifiLogo="./public/images/noun_wifi_159786 1.svg"
        vendorsLogo={`./public/images/vendor-${vendor}.svg`}
        chipLogo={`public/images/${chip}.svg`}
        cardNumber="XXXX XXXX XXXX XXXX"
        name="FIRSTNAME LASTNAME"
        valid="MM/YY"
        cardColor={background}
      />
      <CardForm
        changeChip
        changeBackgroundCard={changeBackgroundCard}
        changeCardHandler={changeCardHandler}
        addCard={addCard}
      />
    </article>
  );
}

export default AddCard;
