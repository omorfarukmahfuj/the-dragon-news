import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const BreakingNews = () => {
  return (
    <div className='flex bg-[#F3F3F3] p-4'>
      <button className="btn-sm font-medium bg-[#D72050] text-white rounded-none">Latest</button>
      <Marquee className='font-semibold md:text-lg text-[#403F3F]' speed={100}>
        <Link className='mx-8  hover:text-[#D72050]' to='/'>Breaking: Major Tech Company Announces New Product Line </Link>
        <Link className='mx-8  hover:text-[#D72050]' to='/'>Local Hero Saves Family from Burning Building</Link>
        <Link className='mx-8  hover:text-[#D72050]' to='/'>Global Market Sees Unexpected Shift Amid Economic Uncertainty</Link>
        <Link className='mx-8  hover:text-[#D72050]' to='/'>Scientists Discover Potential Cure for Rare Disease</Link>
        <Link className='mx-8  hover:text-[#D72050]' to='/'>New Study Reveals Surprising Benefits of Daily Meditation</Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;