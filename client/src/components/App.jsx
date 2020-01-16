import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import OnTimeDelivery from './onTimeDelivery/OnTimeDelivery';

const Landing = () => <h2>Landing</h2>;
const SignUp = () => <h2>Sign Up Here</h2>;
const Scorecard = () => <h2>Scorecard</h2>;
const DPPM = () => <h2>Deffective Parts Per Million</h2>;
const Spend = () => <h2>Spend</h2>;

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/scorecard" component={Scorecard} />
          <Route exact path="/scorecard/OTD" component={OnTimeDelivery} />
          <Route exact path="/scorecard/DPPM" component={DPPM} />
          <Route exact path="/scorecard/spend" component={Spend} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
