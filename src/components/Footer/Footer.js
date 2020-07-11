import React from 'react';
import { useSelector } from 'react-redux';

import './Footer.scss';

const Footer = (props) => {
  const { darkMode } = useSelector((state) => state.settings);

  return (
    <footer
      className={['theme', darkMode ? 'darkMode' : 'lightMode'].join(' ')}
    >
      <div className='container'>
        <h1>Footer</h1>
      </div>
    </footer>
  );
};

export default Footer;
