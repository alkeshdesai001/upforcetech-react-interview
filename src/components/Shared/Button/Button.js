import React from 'react';

import './Button.scss';

const Button = ({ onClick, children, className }) => {
  return (
    <button type='button' className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
