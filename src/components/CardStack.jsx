import React, { useState } from 'react';
import Card from './Card';
import './CardStack.css';

function CardStack({ cards }) {
  if (cards.length >= 11) {
    alert('Maximum amount of cards reached');
  }

  return (
    <section className="card-wallet">
      {cards.map((card, index) => (
        <Card
          className={card}
          key={index}
          wifiLogo={card.images.wifi}
          chipLogo={card.images.chip}
          name={card.name}
          valid={card.valid}
          vendorsLogo={card.images.vendors}
          cardNumber={card.cardNumber}
          cardColor={card.cardColor}
          index={index}
          transformY={`translateY(${
            cards.length <= 3
              ? index * 20
              : cards.length <= 6
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
