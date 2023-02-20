import React, { useState } from 'react';
import Card from './Card';
import './CardStack.css';

function CardStack({ myWalletWithCards, activeCard }) {
  console.log(myWalletWithCards);
  return (
    <section className="card-wallet">
      {myWalletWithCards.map((card, index) => (
        <Card
          // onClick={() => clickedCard(card)}
          // myWalletWithCards={myWalletWithCards}
          textColor={card.textColor}
          activeCard={() => activeCard(card)}
          className={card}
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
        >
          {card}
        </Card>
      ))}
    </section>
  );
}

export default CardStack;
