import React from 'react';

import Main from '../main/Main';
import Footer from '../../footer/Footer';

import './home.css';

const Home = () => {
  return (
    <div className='home-cnt'>
      <Main />
      <div className='home-footer-cnt'>
        {' '}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
