import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import MaterialTable from './pages/MaterialTablePage/MaterialTablePage';
import Footer from './components/Footer/Footer';
import LoadingSpinner from './components/Shared/LoadingSpinner/LoadingSpinner';

import './App.scss';

const CustomTable = React.lazy(() =>
  import('./pages/CustomTablePage/CustomTablePage')
);

const App = (props) => {
  const { darkMode } = useSelector((state) => state.settings);

  return (
    <BrowserRouter>
      <div
        className={[
          'theme',
          darkMode ? 'darkMode' : 'lightMode',
          'content',
        ].join(' ')}
      >
        <Navbar />
        <main className='container'>
          <Switch>
            <Route path='/material' exact component={MaterialTable} />
            <Route path='/custom' exact>
              <Suspense fallback={<LoadingSpinner />}>
                <CustomTable />
              </Suspense>
            </Route>
            <Redirect exact from='/' to='/material' />
          </Switch>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
