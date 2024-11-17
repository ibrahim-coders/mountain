import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user] = useState({
    name: 'John Doe',
    photo: 'https://i.pravatar.cc/40?img=35',
  });

  const handleLogin = () => {
    // Logic to log in
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Logic to log out
    setIsLoggedIn(false);
  };

  return (
    <header className="w-full bg-blue-950 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Website logo*/}
        <img className="w-24 h-10" src={logo} alt="" />

        <nav className="flex items-center space-x-6">
          <NavLink to="/" className="text-white hover:text-red-500 transition">
            Home
          </NavLink>
          <NavLink
            to="/update-profile"
            className="text-white hover:text-red-500 transition"
          >
            Update Profile
          </NavLink>
        </nav>

        {/* User Section */}
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              {/* Profile Picture and Name */}
              <div className="relative group">
                <img
                  src={user.photo}
                  alt={user.name}
                  className="h-10 w-10 rounded-full cursor-pointer"
                />
                <div className="absolute left-1/2 top-full z-10 mt-2 hidden w-max -translate-x-1/2 rounded-md bg-gray-800 px-4 py-2 text-sm text-white group-hover:block">
                  {user.name}
                </div>
              </div>
              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={handleLogin}
              className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
