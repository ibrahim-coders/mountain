import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthContext/AuthProvider ';
import { useContext } from 'react';

const Login = () => {
  const { userLogin } = useContext(AuthContext);
  const handleLoginSubmit = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    userLogin(email, password)
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.log('ERROR', error);
      });
  };
  return (
    <>
      <div className="flex  justify-center text-start  bg-gray-100 py-10">
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
            Don't have an account?{' '}
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