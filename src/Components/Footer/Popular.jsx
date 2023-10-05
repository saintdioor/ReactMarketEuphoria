import './Popular.css'
import more from './../../img/more.svg'

function Popular() {
  return (
    <div className='popular'>
      <div className='content'>
          <h2>Popular Categories</h2>
          <img className='content-button' src={more} alt="" />
      </div>
    </div>
  );
}

export default Popular;