import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import state from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App
      dataUser={state.user}
      dataAddress={state.address}
      cart={state.cart}
      categoriesMen={state.men}
      categoriesWomen={state.women} />
  </React.StrictMode>
);