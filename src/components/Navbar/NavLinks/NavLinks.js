import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.scss';

const NavLinks = (props) => {
  return (
    <ul className='navLinks'>
      <li>
        <NavLink to='/material' exact>
          Material Table
        </NavLink>
      </li>
      <li>
        <NavLink to='/custom' exact>
          Custom Table
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
