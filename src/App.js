import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Profile from './Components/Profile/Profile'
import AddAddress from './Components/AddAddress/AddAddress';
import Error from './Components/Error/Error'
import Cart from './Components/Cart/Cart'
import Main from './Components/Main/Main'

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header className='header' />
        <div>
          <Routes>
            <Route
              path='/account'
              element={
                <Profile
                  dataUser={props.dataUser}
                  dataAddress={props.dataAddress}
                />
              }
            />
            <Route
              path='/addaddress'
              element={
                <AddAddress
                  dataUser={props.dataUser}
                />
              }
            />
            <Route
              path='/'
              element={
                <Error />
              }
            />
            <Route
              path='/cart'
              element={
                <Cart
                  data={props.cart}
                />
              }
            />
            <Route
              path='/main'
              element={
                <Main
                  men={props.categoriesMen}
                  women={props.categoriesWomen}
                />
              }
            />
          </Routes>
        </div>
        <Footer className='footer' />
      </div>
    </BrowserRouter>
  );
}

export default App;