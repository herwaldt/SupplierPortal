import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Landing from './Landing';
import SignUp from './SignUp';

const Scorecard = () => <h2>Scorecard</h2>
const OTD = () => <h2>On Time Delivery</h2>
const DPPM = () => <h2>Deffective Parts Per Million</h2>
const Spend = () => <h2>Spend</h2>

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/scorecard" component={Scorecard} />
          <Route exact path="/scorecard/OTD" component={OTD} />
          <Route exact path="/scorecard/DPPM" component={DPPM} />
          <Route exact path="/scorecard/spend" component={Spend} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
