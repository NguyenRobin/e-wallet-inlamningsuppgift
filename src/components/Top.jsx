import React from 'react';
import './Top.css';

function Top({ title, type }) {
  return (
    <article className="top-section">
      <section className="wallet">
        <h1>{title}</h1>
        <p>{type}</p>
      </section>
    </article>
  );
}

export default Top;
