import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AppContext from '../context/AppContext';
import useInitialState from '../Hooks/useInitialState';
import Home from '../containers/Home';
import About from '../containers/About';
import Error404 from '../containers/Error404';

import '../static/styles/mobile.css';
import '../static/styles/tablet.css';
import '../static/styles/desktop.css';

const App = () => {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route component={Error404}/>
        </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
