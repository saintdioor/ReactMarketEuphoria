import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Profile from './Components/Profile/Profile'
import AddAddress from './Components/Profile/AddAddress/AddAddress';
import Error from './Components/Error/Error'
import Cart from './Components/Cart/Cart'
import Main from './Components/Main/Main'
import StartPage from './Components/Authorization/StartPage';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './utils/router/privateRoute';

function App(props) {
    return (
        <BrowserRouter>
            <div className='App'>
                <div>
                    <Routes>
                        <Route element={<PrivateRoute />}>
                            <Route
                                path='/account'
                                element={[
                                    <Header className='header' />,
                                    <Profile
                                        dataUser={props.state.user}
                                        dataAddress={props.state.address}
                                    />
                                ]} />
                            <Route
                                path='/account/address'
                                element={[
                                    <Header className='header' />,
                                    <AddAddress
                                        dataUser={props.state.user}
                                    />
                                ]} />
                            <Route
                                path='/cart'
                                element={[
                                    <Header className='header' />,
                                    <Cart
                                        data={props.state.cart}
                                    />
                                ]}
                            />
                        </Route>
                        <Route path='/signup'
                            element={
                                <StartPage
                                    image={props.state.authorization.signup}
                                    twitter_logo={props.state.authorization.twitter_logo}
                                    google_logo={props.state.authorization.google_logo}
                                    title='Sign Up'
                                    description='Sign up for free to access to in any of our products'
                                    input_email='Email Address'
                                    id='signup'
                                    text_btn_submit='Sign Up'
                                    question='Already have an  account?'
                                    href='Log in'
                                    link='/login'
                                    error_message='An account with this email already exists'
                                />
                            } />
                        <Route />
                        <Route path='/login'
                            element={
                                <StartPage
                                    image={props.state.authorization.login}
                                    twitter_logo={props.state.authorization.twitter_logo}
                                    google_logo={props.state.authorization.google_logo}
                                    title='Sign In page'
                                    input_email='User name or email address'
                                    id='login'
                                    text_btn_submit='Sign In'
                                    question='Don’t have an account?'
                                    href='Sign up'
                                    link='/signup'
                                    error_message='Wrong login or password'
                                />
                            } />
                        <Route />
                        <Route
                            path='/'
                            element={[
                                <Header className='header' />,
                                <Main
                                    men={props.state.men}
                                    women={props.state.women}
                                    brands={props.state.brands}
                                    salesLine1={props.state.salesLine1}
                                    salesLine2={props.state.salesLine2}
                                    deals={props.state.deals}
                                    newArrival={props.state.newArrival}
                                />
                            ]} />
                        <Route path='*'
                            element={
                                <Error />
                            } />
                        <Route />
                    </Routes>
                </div>
                <Footer className='footer' />
            </div>
        </BrowserRouter>
    );
}

export default App;