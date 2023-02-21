import React from 'react';
import Card from './Card';
import './CardStack.css';

function CardStack({ myWalletWithCards, displayActiveCard }) {
  const cards = myWalletWithCards.map((card, index) => (
    <Card
      textColor={card.textColor}
      displayActiveCard={() => displayActiveCard(card)}
      key={index}
      wifiLogo={card.images.wifi}
      chipLogo={card.images.chip}
      name={card.name}
      valid={card.valid}
      vendorsLogo={card.images.vendors}
      cardNumber={card.cardNumber}
      cardColor={card.cardColor}
      transformY={`translateY(${
        myWalletWithCards.length <= 3
          ? index * 20
          : myWalletWithCards.length <= 6
          ? index * 10
          : index * 5
      }%`}
    ></Card>
  ));

  return <section className="card-wallet">{cards}</section>;
}

export default CardStack;
