import React from 'react';
import { useSelector } from 'react-redux';

import './Footer.scss';

const Footer = (props) => {
  const { darkMode } = useSelector((state) => state.settings);

  return (
    <footer
      className={['theme', darkMode ? 'lightMode' : 'darkMode'].join(' ')}
    >
      <p>
        Created with <i className='fa fa-heart'></i> by Alkesh Desai - Visit my
        Github account &nbsp;
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/alkeshdesai001/'
        >
          here
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
