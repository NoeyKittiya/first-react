import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Route , Switch} from 'react-router-dom';


//ReactDOM.render(<App />, document.getElementById('root'));
const AppWithRouter = () => (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )

ReactDOM.render(<AppWithRouter />, document.getElementById('root'));
