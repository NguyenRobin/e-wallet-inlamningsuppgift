import React, { useState } from 'react';
import './AddCard.css';
import Top from '../components/Top';
import Card from '../components/Card';
import CardForm from '../components/CardForm';

function AddCard({ addCard }) {
  const [vendorLogo, setVendorLogo] = useState('bitcoin');
  const [background, setBackground] = useState('#D0D0D0');
  const [chip, setChip] = useState('chip 2');
  const [wifi, setWifi] = useState('1');
  const [textColor, setTextColor] = useState('#000');

  function changeCardHandler(vendorLogo) {
    if (vendorLogo === 'defaultCard') {
      setVendorLogo('bitcoin');
    } else {
      setVendorLogo(vendorLogo);
    }
  }

  function changeBackgroundCard(card) {
    if (card === 'defaultCard') {
      setBackground('#D0D0D0');
      setChip('chip 2');
      setWifi('1');
      setTextColor('#000');
    } else if (card === 'bitcoin') {
      setBackground('#ffae34');
      setChip('chip');
      setTextColor('#000');
      setWifi('1');
    } else if (card === 'blockchain') {
      setBackground('#8B58F9');
      setChip('chip');
      setTextColor('#fff');
      setWifi('2');
    } else if (card === 'evil') {
      setBackground('#F33355');
      setChip('chip');
      setTextColor('#fff');
      setWifi('2');
    } else if (card === 'ninja') {
      setBackground('#222222');
      setChip('chip');
      setTextColor('#fff');
      setWifi('2');
    }
  }

  return (
    <article className="addCard">
      <Top title="ADD A NEW BANK CARD" type="NEW CARD" />
      <Card
        textColor={textColor}
        wifiLogo={`./public/images/noun_wifi_159786 ${wifi}.svg`}
        vendorsLogo={`./public/images/vendor-${vendorLogo}.svg`}
        chipLogo={`public/images/${chip}.svg`}
        cardNumber="XXXX XXXX XXXX XXXX"
        name="FIRSTNAME LASTNAME"
        valid="MM/YY"
        cardColor={background}
      />
      <CardForm
        vendorLogo={vendorLogo}
        background={background}
        chip={chip}
        wifi={wifi}
        textColor={textColor}
        changeBackgroundCard={changeBackgroundCard}
        changeCardHandler={changeCardHandler}
        addCard={addCard}
      />
    </article>
  );
}

export default AddCard;
