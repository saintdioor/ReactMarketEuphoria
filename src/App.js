import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Profile from './Components/Profile/Profile'
import AddAddress from './Components/Profile/AddAddress/AddAddress';
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
                                    dataUser={props.state.user}
                                    dataAddress={props.state.address}
                                />
                            }
                        />
                        <Route
                            path='/account/address'
                            element={
                                <AddAddress
                                    dataUser={props.state.user}
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
                                    data={props.state.cart}
                                />
                            }
                        />
                        <Route
                            path='/main'
                            element={
                                <Main
                                    men={props.state.men}
                                    women={props.state.women}
                                    brands={props.state.brands}
                                    salesLine1={props.state.salesLine1}
                                    salesLine2={props.state.salesLine2}
                                    deals={props.state.deals}
                                    newArrival={props.state.newArrival}
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