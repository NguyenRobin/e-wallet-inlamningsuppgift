import React from 'react';
import './Button.css';
function Button({ btnText, className }) {
  return <button className={className}>{btnText}</button>;
}

export default Button;
