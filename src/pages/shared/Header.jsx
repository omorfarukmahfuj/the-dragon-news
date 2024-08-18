import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';
const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo" />
      <p>Journalism Without Fear or Favour</p>
      <p className='text-xl'>{moment().format('dddd, MMMM D, YYYY')}</p>
    </header>
  );
};

export default Header;