import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import App from './components/App';
// import reducers from './reducers';

// const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(<App />, document.getElementById('root'));