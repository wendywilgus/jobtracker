import React from 'react';
import { Logo } from '../components';
import Main from '../assets/images/main-alt.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Link } from 'react-router-dom';


const Landing = () => {
  return (
    <Wrapper>
    <div>
        <nav>
            <Logo />
        </nav>
        <div className='container page'>
          <div className='info'>
            <h1>
              Ready <span>2</span> Work
            </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi blandit cursus risus at ultrices mi. Est placerat in egestas erat imperdiet sed euismod nisi porta. Convallis a cras semper auctor. Platea dictumst vestibulum rhoncus est.

            </p>
            <Link to='/register' className="btn btn-hero">Login/Register</Link>
          </div>
          <img src={ Main } alt="text for Job" className='img main-img'/>
        </div>
    </div>
    </Wrapper>
     
  )
}



export default Landing; 