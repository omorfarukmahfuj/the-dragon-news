import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';
const Header = () => {
  return (
    <header className='text-center mt-6 md:mt-12 mb-4 md:mb-7'>
      <img className='mx-auto mb-5' src={logo} alt="logo" />
      <p className='text-lg text-[#706F6F] mb-2'>Journalism Without Fear or Favour</p>
      <p className='text-xl text-[#706F6F] font-medium'>
        <span className='text-[#403F3F]'>{moment().format('dddd, ')}</span>
        {moment().format('MMMM D, YYYY')}
      </p>
    </header>
  );
};

export default Header;