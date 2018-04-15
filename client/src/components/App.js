import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Account from './Account';
import Bills from './Bills';
import Budget from './Budget';
import Plaid from './Plaid';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <div className="container" style={{marginTop:"75px"}}>
              <Route exact path="/" component={Home} />
              <Route exact path="/account/:accountNumber" component={Account} />
              <Route exact path="/bills/:billNumber" component={Bills} />
              <Route exact path="/budget/:budgetNumber" component={Budget} />
              <Route exact path="/plaid" component={Plaid} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
