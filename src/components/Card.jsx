import React from 'react';
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
}) {
  return (
    <article
      className="card"
      style={{ backgroundColor: cardColor, transform: transformY }}
    >
      <section className="card-symbols">
        <img src={wifiLogo} alt="Wi-fi" />
        <img src={vendorsLogo} alt="Bitcoin" />
      </section>

      <section className="card-chip">
        <img src={chipLogo} alt="Chip" />
      </section>

      <section className="card-holder__section">
        <section className="card-number">
          <h2>{cardNumber}</h2>
        </section>

        <section className="card-holder__information">
          <section className="card-holder__title">
            <p>CARDHOLDER NAME</p>
            <p>VALID THRU</p>
          </section>
          <section className="card-holder__customer">
            <p>{name}</p>
            <p>{valid}</p>
          </section>
        </section>
      </section>
    </article>
  );
}

export default Card;
