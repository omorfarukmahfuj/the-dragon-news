import React from 'react';
import { FaGoogle, FaGithub, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import qZone1 from "../../assets/qZone1.png";
import qZone2 from "../../assets/qZone2.png";
import qZone3 from "../../assets/qZone3.png";
import advertisementBg from "../../assets/bg.png";


const RightSideNav = () => {
  return (
    <div>
      {/* Login With */}
      <div className='mb-7'>
        <h2 className="text-xl text-[#403F3F] font-semibold mb-5">Login With</h2>
        <button className="btn btn-outline btn-info w-full mb-3">
          <FaGoogle />
          Login with Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub />
          Login with Github
        </button>
      </div>

      {/*  Find Us On */}
      <div className='mb-5'>
        <h2 className="text-xl text-[#403F3F] font-semibold mb-5">Find Us On</h2>
        {/* Facebook */}
        <a className='flex items-center gap-3 text-[#706F6F] font-medium border border-[#E7E7E7] rounded-t-md p-4' href="">
          <div className='text-[#3B599C] bg-[#F3F3F3] rounded-full w-8 h-8 flex items-center justify-center'>
            <FaFacebookF></FaFacebookF>
          </div>
          Facebook
        </a>

        {/* X / Twitter*/}
        <a className='flex items-center gap-3 text-[#706F6F] font-medium border-x border-[#E7E7E7] p-4' href="">
          <div className='text-black bg-[#F3F3F3] rounded-full w-8 h-8 flex items-center justify-center'>
            <FaXTwitter />
          </div>
          Twitter
        </a>

        {/* Instagram */}
        <a className='flex items-center gap-3 text-[#706F6F] font-medium border border-[#E7E7E7] rounded-b-md p-4' href="">
          <div className='bg-[#F3F3F3] rounded-full w-8 h-8 flex items-center justify-center'>
            <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="instagram-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#f09433" />
                  <stop offset="50%" stopColor="#e6683c" />
                  <stop offset="100%" stopColor="#bc1888" />
                </linearGradient>
              </defs>
              <FaInstagram style={{ fill: "url(#instagram-gradient)" }} />
            </svg>
          </div>
          Instagram
        </a>
      </div>

      {/* Q-Zone */}
      <div className='mb-5 bg-[#F3F3F3] py-4'>
        <h2 className="text-xl text-[#403F3F] font-semibold ml-4 mb-5">Q-Zone</h2>
        <div className='flex flex-col gap-5 px-2'>
          <img src={qZone1} />
          <img src={qZone2} />
          <img src={qZone3} />
        </div>
      </div>

      {/* Advertisement */}
      <div className='bg-cover bg-center h-[509px] w-full flex flex-col items-center justify-center mb-5 px-8 text-white text-center' style={{ backgroundImage: `url(${advertisementBg})` }}>
        <h3 className=' text-3xl font-bold mb-5 leading-[45px]'>Create an Amazing Newspaper</h3>
        <p className='mb-7'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
        <button className='btn bg-[#D72050] border-none rounded-none text-white'>Learn More</button>
      </div>
    </div>

  );
};

export default RightSideNav;