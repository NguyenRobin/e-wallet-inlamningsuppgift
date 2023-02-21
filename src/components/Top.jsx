import React from 'react';
import './Top.css';

function Top({ title, textTitle }) {
  return (
    <article className="top-section">
      <section className="wallet">
        <h1>{title}</h1>
        <p>{textTitle}</p>
      </section>
    </article>
  );
}

export default Top;
