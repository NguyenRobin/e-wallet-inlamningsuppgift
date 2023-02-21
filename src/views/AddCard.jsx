import React, { useState } from 'react';
import './AddCard.css';
import Top from '../components/Top';
import Card from '../components/Card';
import CardForm from '../components/CardForm';

function AddCard({ addCardToWallet }) {
  const [vendorLogo, setVendorLogo] = useState('bitcoin');
  const [backgroundCard, setBackgroundCard] = useState('#D0D0D0');
  const [chipLogo, setChipLogo] = useState('chip 2');
  const [wifiLogo, setWifiLogo] = useState('1');
  const [textColor, setTextColor] = useState('#000');

  function switchCard(card) {
    if (card === 'defaultCard') {
      setVendorLogo('bitcoin');
      setBackgroundCard('#D0D0D0');
      setChipLogo('chip 2');
      setWifiLogo('1');
      setTextColor('#000');
    } else if (card === 'bitcoin') {
      setBackgroundCard('#ffae34');
      setChipLogo('chip');
      setTextColor('#000');
      setWifiLogo('1');
      setVendorLogo(card);
    } else if (card === 'blockchain') {
      setBackgroundCard('#8B58F9');
      setChipLogo('chip');
      setTextColor('#fff');
      setWifiLogo('2');
      setVendorLogo(card);
    } else if (card === 'evil') {
      setBackgroundCard('#F33355');
      setChipLogo('chip');
      setTextColor('#fff');
      setWifiLogo('2');
      setVendorLogo(card);
    } else if (card === 'ninja') {
      setBackgroundCard('#222222');
      setChipLogo('chip');
      setTextColor('#fff');
      setWifiLogo('2');
      setVendorLogo(card);
    }
  }

  return (
    <article className="addCard">
      <Top title="ADD A NEW BANK CARD" textTitle="NEW CARD" />
      <Card
        textColor={textColor}
        wifiLogo={`./public/images/noun_wifi_159786 ${wifiLogo}.svg`}
        vendorsLogo={`./public/images/vendor-${vendorLogo}.svg`}
        chipLogo={`./public/images/${chipLogo}.svg`}
        cardNumber="XXXX XXXX XXXX XXXX"
        name="FIRSTNAME LASTNAME"
        valid="MM/YY"
        cardColor={backgroundCard}
      />
      <CardForm
        vendorLogo={vendorLogo}
        backgroundCard={backgroundCard}
        chipLogo={chipLogo}
        wifiLogo={wifiLogo}
        textColor={textColor}
        switchCard={switchCard}
        addCardToWallet={addCardToWallet}
      />
    </article>
  );
}

export default AddCard;
