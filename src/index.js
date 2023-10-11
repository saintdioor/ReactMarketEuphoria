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
            categoriesWomen={state.women}
            brands={state.brands}
            sales_line_1={state.sales_line_1}
            sales_line_2={state.sales_line_2}
            deals={state.deals}
            new_arrival={state.new_arrival} />
    </React.StrictMode>
);