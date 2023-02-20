import React from 'react';
import './Button.css';
function Button({ btnTextTitle, className, onClick }) {
  return (
    <button onClick={onClick} className={className}>
      {btnTextTitle}
    </button>
  );
}

export default Button;
