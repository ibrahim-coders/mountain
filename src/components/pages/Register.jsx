import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthContext/AuthProvider ';
import { IoLogoGoogle } from 'react-icons/io';

import { auth } from '../../firebase.console';
import { signInWithPopup } from 'firebase/auth';

const Register = () => {
  const { createNewUser } = useContext(AuthContext);
  const handleRegisterSubmit = e => {
    e.preventDefault();
    console.log('Form submitted');
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password, name, photoURL);

    createNewUser(email, password)
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.log('ERROR', error);
      });
  };
  const handleGoogleLogin = () => {
    signInWithPopup(auth)
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.log('ERROR', error.message);
      });
    console.log('Google login attempt');
  };
  return (
    <>
      <div className="flex  justify-center text-start  bg-gray-100 py-10">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg mx-auto text-start ">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Register a New Account
          </h2>
          <form onSubmit={handleRegisterSubmit}>
            {/* Name Field */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
            {/* Photo URL Field */}
            <div className="mb-4">
              <label
                htmlFor="photoURL"
                className="block text-gray-700 font-medium mb-2"
              >
                Photo URL
              </label>
              <input
                type="url"
                name="photoURL"
                placeholder="Enter your photo URL"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>

            {/* Password Field */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600 transition-colors"
            >
              Register
            </button>
          </form>
          <button
            onClick={handleGoogleLogin}
            className="btn flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-full w-full"
          >
            <IoLogoGoogle className="text-orange-400 text-xl" />
            <span>Continue with Google</span>
          </button>
          <p className="mt-4 text-sm text-gray-500 text-center">
            Already have an account?
            <Link
              to="/login"
              className="font-semibold text-blue-500 hover:text-blue-600"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
