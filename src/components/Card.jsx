import React, { useState } from 'react';
import './Card.css';
function Card({
  wifiLogo,
  chipLogo,
  vendorsLogo,
  name,
  valid,
  cardNumber,
  cardColor,
  index,
  transformY,
  textColor,
  onClick,
  deleteCard,
  removeCardFromWallet,
}) {
  return (
    <article
      onClick={onClick}
      className="card"
      style={{
        backgroundColor: cardColor,
        transform: transformY,
      }}
    >
      {deleteCard && (
        <button onClick={removeCardFromWallet}>Delete Card</button>
      )}
      <section className="card-symbols">
        <img
          src={wifiLogo ? wifiLogo : 'public/images/noun_wifi_159786 1.svg'}
          alt="Wi-fi"
        />
        <img
          src={vendorsLogo ? vendorsLogo : 'public/images/vendor-bitcoin.svg'}
          alt="Bitcoin"
        />
      </section>
      <section className="card-chip">
        <img src={chipLogo ? chipLogo : 'public/images/chip.svg'} alt="Chip" />
      </section>
      <section className="card-holder__section">
        <section className="card-number" style={{ color: textColor }}>
          <h2>{cardNumber}</h2>
        </section>

        <section className="card-holder__information">
          <section className="card-holder__title">
            <p style={{ color: textColor }}>CARDHOLDER NAME</p>
            <p style={{ color: textColor }}>VALID THRU</p>
          </section>
          <section
            className="card-holder__customer"
            style={{ color: textColor }}
          >
            <p style={{ color: textColor }}>{name}</p>
            <p style={{ color: textColor }}>{valid}</p>
          </section>
        </section>
      </section>
    </article>
  );
}

export default Card;
