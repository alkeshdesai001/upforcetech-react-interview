import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import MaterialTable from './pages/MaterialTable/MaterialTable';
import CustomTable from './pages/CustomTable/CustomTable';
import Footer from './components/Footer/Footer';

import './App.scss';

const App = (props) => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Switch>
          <Route path='/' exact component={MaterialTable} />
          <Route path='/custom' exact component={CustomTable} />
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
