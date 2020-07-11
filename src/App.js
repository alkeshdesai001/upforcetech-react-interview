import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import MaterialTable from './pages/MaterialTable/MaterialTable';
import CustomTable from './pages/CustomTable/CustomTable';
import Footer from './components/Footer/Footer';

import './App.scss';

const App = (props) => {
  const { darkMode } = useSelector((state) => state.settings);

  return (
    <BrowserRouter>
      <div className={['theme', darkMode ? 'darkMode' : 'lightMode'].join(' ')}>
        <Navbar />
        <main className='container'>
          <Switch>
            <Route path='/' exact component={MaterialTable} />
            <Route path='/custom' exact component={CustomTable} />
          </Switch>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
