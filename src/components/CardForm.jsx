import React, { useState } from 'react';
import './CardForm.css';
import Button from './Button';

function CardForm({
  addCard,
  changeCardHandler,
  changeBackgroundCard,
  changeChip,
}) {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [validDate, setValidDate] = useState('');
  const [CCV, setCCV] = useState('');
  const [vendor, setVendor] = useState('');

  function cardNumberHandler(event) {
    setCardNumber(event.target.value);
  }

  function cardHolderHandler(event) {
    setCardHolder(event.target.value);
  }

  function validDateHandler(event) {
    setValidDate(event.target.value);
  }

  function CCVHandler(event) {
    setCCV(event.target.value);
  }

  function vendorHandler(event) {
    setVendor(event.target.value);
    changeCardHandler(event.target.value);
    console.log(event.target.value);
    changeBackgroundCard(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    const newCard = {
      name: cardHolder,
      valid: validDate,
      cardNumber: cardNumber,
      CCV: CCV,
      vendor: vendor,
      images: {
        wifi: 'public/images/noun_wifi_159786 2.svg',
        chip: 'public/images/chip.svg',
        vendors: './public/images/vendor-blockchain.svg',
      },
      cardColor: '#8B58F9',
    };
    addCard(newCard);
    console.log(newCard);
  }

  return (
    <form onSubmit={submitHandler} className="form-section">
      <section className="form-card-number">
        <label htmlFor="text">CARD NUMBER</label>
        <input
          onChange={cardNumberHandler}
          value={cardNumber}
          placeholder="1234 5676 9101 1123"
          type="text"
          minLength="16"
          maxLength="16"
        />
      </section>

      <section className="form-cardholder">
        <label htmlFor="name">CARDHOLDER NAME</label>
        <input
          onChange={cardHolderHandler}
          value={cardHolder}
          placeholder="ROBIN NGUYEN"
          type="text"
          minLength="2"
          maxLength="50"
        />
      </section>

      <section className="form__valid-ccv">
        <section className="form-card-valid">
          <label htmlFor="">VALID THRU</label>
          <input
            onChange={validDateHandler}
            value={validDate}
            maxLength="5"
            placeholder="12/25"
            type="text"
          />
        </section>

        <section className="form-card-CCV">
          <label htmlFor="">CCV</label>
          <input
            onChange={CCVHandler}
            value={CCV}
            placeholder="686"
            type="text"
            minLength="3"
            maxLength="3"
          />
        </section>
      </section>

      <section className="form-vendors">
        <label htmlFor="vendor-select">VENDOR</label>
        <select
          value={vendor}
          onChange={vendorHandler}
          name="vendors"
          id="vendor-select"
        >
          <option value="defaultCard" readOnly>
            --Please choose an option--
          </option>
          <option value="bitcoin">BITCOIN INC</option>
          <option value="ninja">NINJA BANK</option>
          <option value="blockchain">BLOCK CHAIN INC</option>
          <option value="evil">EVIL CORP</option>
        </select>
      </section>
      <Button btnText="ADD CARD" className="btn__add-card" />
    </form>
  );
}

export default CardForm;