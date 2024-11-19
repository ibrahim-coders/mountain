import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext/AuthProvider ';
import { useContext, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

const Login = () => {
  const { userLogin, users, setUser } = useContext(AuthContext);
  const [errMess, setMessErr] = useState('');
  const navigate = useNavigate();
  console.log(users);
  const location = useLocation();
  console.log(location);
  const handleLoginSubmit = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    userLogin(email, password)
      .then(result => {
        setUser(result.user);
        toast.success('Login successful!');
        navigate(location?.state ? location.state : '/');
      })
      .catch(error => {
        console.log('ERROR', error.message);
        setMessErr(error.message);

        if (error.code === 'auth/wrong-password') {
          setMessErr('Incorrect password. Please try again.');
        } else if (error.code === 'auth/user-not-found') {
          setMessErr('No account found with this email.');
        } else {
          setMessErr('Something went wrong. Please try again.');
        }
      });
  };
  return (
    <>
      <div className="flex  justify-center text-start  bg-gray-100 py-10">
        <Helmet>
          <title>HIKKER/Login</title>
        </Helmet>
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg ">
          {/* Login Form Heading */}
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Login to Your Account
          </h2>

          {/* Login Form */}
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 mt-1 text-gray-900 border rounded-md border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="w-full px-4 py-2 mt-1 text-gray-900 border rounded-md border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
              {setMessErr && <p className=" text-red-600 py-2">{errMess}</p>}

              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600 pt-2"
              >
                Forget Password
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 mt-4 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Login
            </button>
          </form>
          {/* Register Link */}
          <p className="text-sm text-center text-gray-600">
            Don't have an account?
            <Link
              to="/register"
              className="font-semibold text-blue-500 hover:text-blue-600"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
