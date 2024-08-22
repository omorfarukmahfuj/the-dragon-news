import React, { useContext } from 'react';
import Navbar from '../shared/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { useLocation } from 'react-router-dom';

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = e => {
    e.preventDefault();
    // const email = e.target.email.value;
    console.log(e.currentTarget);

    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    console.log(email, password);
    signIn(email, password)
      .then(result => {
        console.log(result.user);
        // Navigate after Login
        navigate(location.state ? location.state : '/')
      })
      .catch(error => {
        console.error(error);

      })

  }
  return (
    <div className='bg-base-300 h-screen'>
      <div className='w-11/12 md:max-w-6xl mx-auto'>
        {/* Navbar */}
        <div className='py-3 md:py-7'>
          <Navbar></Navbar>
        </div>
        {/* Form */}
        <div className="card bg-base-100 w-full md:w-2/4 md:p-5 mx-auto rounded-none">
          <form onSubmit={handleLogin} className="card-body">
            <h2 className='text-[#403F3F] text-2xl md:text-4xl font-semibold text-center mb-3 md:mb-5'>Login your account</h2>
            <hr />
            {/* Input Email */}
            <div className="form-control mt-1 md:mt-3">
              <label className="label">
                <span className="label-text font-semibold text-[#403F3F]">Email</span>
              </label>
              <input type="email" name='email' placeholder="Enter your email address" className="input bg-[#F3F3F3]" required />
            </div>

            {/* Input Password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-[#403F3F]">Password</span>
              </label>
              <input type="password" name='password' placeholder="Enter your password" className="input bg-[#F3F3F3]" required />

              {/* Forget Password */}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover mt-2 md:mt-3">Forgot password?</a>
              </label>
            </div>

            {/* Submit Button */}
            <div className="form-control md:mt-3">
              <button className="btn bg-[#403F3F] hover:bg-[#f87829] text-white">Login</button>
            </div>
            <p className='font-semibold text-[#706F6F] text-center mt-4 md:mt-7'>Dont’t Have An Account ? <Link to="/register" className='text-[#f87829]'>Register</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;