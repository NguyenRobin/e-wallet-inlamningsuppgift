import React, { useState } from 'react';
import './CardForm.css';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
function CardForm({
  addCardToWallet,
  switchCard,
  vendorLogo,
  background,
  chip,
  wifi,
  textColor,
}) {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [validDate, setValidDate] = useState('');
  const [CCV, setCCV] = useState('');
  const [vendor, setVendor] = useState('');

  const navigate = useNavigate();

  function goToWalletAfterCardAdded() {
    navigate('/');
  }

  function cardNumberHandler(event) {
    // OBS! Detta REGEX tog jag från stackOverFlow för att kunna formatera kortet snyggt
    const userInputCardNumber = event.target.value;
    const card = userInputCardNumber
      .replace(/\D/g, '') // Tar bort alla tecken som inte är siffor
      .match(/.{1,4}/g) // Delar upp längden av variabeln  i 4 grupper
      .join(' '); // lägger till ett mellanslag i varje grupp
    setCardNumber(card);
  }

  function cardHolderHandler(event) {
    setCardHolder(event.target.value.toUpperCase());
  }

  function validDateHandler(event) {
    setValidDate(event.target.value);
  }

  function CCVHandler(event) {
    setCCV(event.target.value.trim());
  }

  function vendorHandler(event) {
    setVendor(event.target.value);
    switchCard(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    if (
      cardNumber === '' ||
      cardHolder === '' ||
      validDate === '' ||
      CCV === '' ||
      validDate === '' ||
      vendor === 'defaultCard'
    )
      return;
    const newCard = {
      name: cardHolder,
      valid: validDate,
      cardNumber: cardNumber,
      CCV: CCV,
      vendor: vendor,
      images: {
        wifi: `./public/images/noun_wifi_159786 ${wifi}.svg`,
        chip: `./public/images/${chip}.svg`,
        vendors: `./public/images/vendor-${vendorLogo}.svg`,
      },
      cardColor: background,
      textColor: textColor,
    };
    addCardToWallet(newCard);
    goToWalletAfterCardAdded();
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
          minLength="19"
          maxLength="19"
          // pattern="[0-9]*"
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
            pattern="[0-9]*"
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
          <option value="defaultCard">--Please choose an option--</option>
          <option value="bitcoin">BITCOIN INC</option>
          <option value="ninja">NINJA BANK</option>
          <option value="blockchain">BLOCK CHAIN INC</option>
          <option value="evil">EVIL CORP</option>
        </select>
      </section>
      <Button btnTextTitle="ADD CARD" className="btn__add-card" />
    </form>
  );
}

export default CardForm;
