import React from 'react';
import img from '../assets/images/not_found.svg';
import { Link } from "react-router-dom";
import Wrapper from '../assets/wrappers/ErrorPage';

const Error = () => {
  return (
    <Wrapper className='full-page'>
        <div><img src={img} alt="not found" />
        
        <h1>Page not found!</h1>
        <Link to='/'>Back Home</Link>
        </div>
    </Wrapper>

  )
}

export default Error;