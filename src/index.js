import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

let dataUser = {
  id: 1,
  name: 'Yaroslav',
  surname: 'Vavilkin',
  phone: '+79934466516',
  email: 'vavilkinyaroslav@gmail.com'
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dataUser={dataUser} />
  </React.StrictMode>
);