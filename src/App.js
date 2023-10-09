import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Profile from './Components/Profile/Profile'
import AddAddress from './Components/AddAddress/AddAddress';
import Error from './Components/Error/Error'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header className='header' />
        <div>
          <Routes>
            <Route path='/account' element={<Profile dataUser={props.dataUser}/>} />
            <Route path='/addaddress' Component={AddAddress} />
            <Route path='/' Component={Error} />
          </Routes>
        </div>
        <Footer className='footer' />
      </div>
    </BrowserRouter>
  );
}

export default App;