import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Landing from './Landing';
import SignUp from './LoginComponents/SignUp';
import Scorecard from './Scorecard';
import ForgotPassword from './LoginComponents/ForgotPassword';
import MonthSwitch from './ThemeComponents/MonthSwitch';
import BarChart from './ThemeComponents/BarChart';

const DPPM = () => <h2>Deffective Parts Per Million</h2>;
const Spend = () => <h2>Spend</h2>;

const App = () => (
  <>
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path="/" component={Landing} />
        <Route path="/scorecard" component={MonthSwitch} />
        <Route exact path="/scorecard" component={Scorecard} />
        <Route exact path="/scorecard/OTD" component={BarChart} />
        <Route exact path="/scorecard/DPPM" component={DPPM} />
        <Route exact path="/scorecard/spend" component={Spend} />
        <Route exact path="/account/signup" component={SignUp} />
        <Route exact path="/account/password" component={ForgotPassword} />
      </div>
    </BrowserRouter>
  </>
);

export default App;
