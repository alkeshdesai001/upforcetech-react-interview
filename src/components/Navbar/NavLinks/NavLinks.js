import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.scss';

const NavLinks = (props) => {
  return (
    <ul className='navLinks'>
      <li>
        <NavLink to='/'>Material Table</NavLink>
      </li>
      <li>
        <NavLink to='/custom'>Custom Table</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
