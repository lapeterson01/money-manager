import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Account from './Account';
import Bills from './Bills';

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
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
