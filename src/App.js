import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Profile from './Components/Profile/Profile'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header className='header'/>
      <Profile></Profile>
      {/* <div className='body'>Hello world</div> */}
      <Footer className='footer'/>
    </div>
  );
}

export default App;
