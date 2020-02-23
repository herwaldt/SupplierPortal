import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Landing from './Landing';
import SignUp from './LoginComponents/SignUp';
import Scorecard from './Scorecard';
import ForgotPassword from './LoginComponents/ForgotPassword';
import MonthSwitch from './ThemeComponents/MonthSwitch';
import OnTimeDelivery from './OnTimeDelivery';
import DefectiveParts from './DefectiveParts';
import SupplierSpend from './SupplierSpend';

const Spend = () => <h2>Spend</h2>;

const App = () => (
  <>
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path="/" component={Landing} />
        <Route path="/scorecard" component={MonthSwitch} />
        <Route exact path="/scorecard" component={Scorecard} />
        <Route exact path="/scorecard/OTD" component={OnTimeDelivery} />
        <Route exact path="/scorecard/DPPM" component={DefectiveParts} />
        <Route exact path="/scorecard/TSS" component={SupplierSpend} />
        <Route exact path="/account/signup" component={SignUp} />
        <Route exact path="/account/password" component={ForgotPassword} />
      </div>
    </BrowserRouter>
  </>
);

export default App;
