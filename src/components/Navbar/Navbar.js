import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import NavLinks from './NavLinks/NavLinks';
import SideDrawer from '../Shared/SideDrawer/SideDrawer';
import Backdrop from '../Shared//Backdrop/Backdrop';
import Toggle from '../Shared/Toggle/Toggle';
import { toggleDarkMode } from '../../store/Actions/SettingsAction';

import classes from './Navbar.module.scss';

const Navbar = (props) => {
  const { darkMode } = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  const toggleDarkModeHandler = useCallback(() => dispatch(toggleDarkMode()), [
    dispatch,
  ]);

  const [openDrawer, setOpenDrawer] = useState(false);

  const className = darkMode ? 'darkMode theme' : 'lightMode theme';

  const drawer = (
    <>
      {openDrawer && <Backdrop onClick={() => setOpenDrawer(false)} />}
      <SideDrawer className={className} show={openDrawer}>
        <h1 className={[classes.drawerTitle, classes.title].join(' ')}>
          <Link to='/'>ShipCorp</Link>
        </h1>
        <div className={classes.toggle}>
          <i
            className='fas fa-sun'
            style={{ color: darkMode ? 'grey' : 'yellow' }}
          ></i>
          <Toggle checked={darkMode} onChange={toggleDarkModeHandler} />
          <i
            className='fas fa-moon'
            style={{ color: darkMode ? 'slateblue' : 'grey' }}
          ></i>
        </div>
        <nav className={classes.drawer}>
          <NavLinks />
        </nav>
      </SideDrawer>
    </>
  );

  return (
    <div className={className}>
      {drawer}
      <header className={classes.navHeader}>
        <div className={classes.navContainer}>
          <button
            className={classes.menuButton}
            onClick={() => setOpenDrawer(true)}
          >
            <span />
            <span />
            <span />
          </button>

          <h1 className={classes.title}>
            <Link to='/'>ShipCorp</Link>
          </h1>

          <nav className={classes.navLinks}>
            <NavLinks />

            <div className={classes.toggle}>
              <i
                className='fas fa-sun'
                style={{ color: darkMode ? 'grey' : 'yellow' }}
              ></i>
              <Toggle checked={darkMode} onChange={toggleDarkModeHandler} />
              <i
                className='fas fa-moon'
                style={{ color: darkMode ? 'slateblue' : 'grey' }}
              ></i>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
