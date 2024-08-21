import { Link } from 'react-router-dom';
import Navbar from '../shared/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const register = () => {
  const { createUser } = useContext(AuthContext)
  const handleRegister = e => {
    e.preventDefault();
    // const email = e.target.email.value;
    console.log(e.currentTarget);

    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const photo = form.get('photo');
    const email = form.get('email');
    const password = form.get('password');
    console.log(name, photo, email, password);

    // Create User
    createUser(email, password)
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.error(error);
      })
  }


  return (
    <div className='bg-base-300'>
      <div className='w-11/12 md:max-w-6xl mx-auto pb-10'>
        {/* Navbar */}
        <div className='py-3 md:py-7'>
          <Navbar></Navbar>
        </div>
        {/* Form */}
        <div className="card bg-base-100 w-full md:w-2/4 md:p-5 mx-auto rounded-none">
          <form onSubmit={handleRegister} className="card-body">
            <h2 className='text-[#403F3F] text-2xl md:text-4xl font-semibold text-center mb-3 md:mb-5'>Register your account</h2>
            <hr />
            {/* Input Name */}
            <div className="form-control mb-3 md:mb-5">
              <label className="label">
                <span className="label-text font-semibold text-[#403F3F]">Name</span>
              </label>
              <input type="text" name='name' placeholder="Enter your name" className="input bg-[#F3F3F3]" required />
            </div>

            {/* Input Photo */}
            <div className="form-control mb-3 md:mb-5">
              <label className="label">
                <span className="label-text font-semibold text-[#403F3F]">Photo URL</span>
              </label>
              <input type="url" name='photo' placeholder="Enter your photo url" className="input bg-[#F3F3F3]" required />

            </div>

            {/* Input Email */}
            <div className="form-control mb-3 md:mb-5">
              <label className="label">
                <span className="label-text font-semibold text-[#403F3F]">Email</span>
              </label>
              <input type="email" name='email' placeholder="Enter your email address" className="input bg-[#F3F3F3]" required />
            </div>

            {/* Input Password */}
            <div className="form-control mb-3 md:mb-5">
              <label className="label">
                <span className="label-text font-semibold text-[#403F3F]">Password</span>
              </label>
              <input type="password" name='password' placeholder="Enter your password" className="input bg-[#F3F3F3]" required />

            </div>

            {/* Submit Button */}
            <div className="form-control">
              <button className="btn bg-[#403F3F] hover:bg-[#f87829] text-white">Login</button>
            </div>
            <p className='font-semibold text-[#706F6F] text-center mt-4 md:mt-7'>Already Have An Account ? <Link to="/login" className='text-[#f87829]'>Login</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default register;