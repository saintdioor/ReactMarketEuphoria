import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Profile from './Components/Profile/Profile'
import AddAddress from './Components/AddAddress/AddAddress';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header className='header'/>
        <div>
          <Route component={Profile}/>
          <Route component={AddAddress}/>
        </div>
        <Footer className='footer'/>
      </div>
    </BrowserRouter>
  );
}

export default App;
