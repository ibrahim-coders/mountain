import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { AuthContext } from '../AuthContext/AuthProvider ';

const Navbar = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const { users, logOut } = useContext(AuthContext);

  // console.log(users.photoURL);
  return (
    <header className=" relative z-20 w-full  bg-blue-950 shadow-lg shadow-slate-700/5 after:absolute after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full lg:backdrop-blur-sm lg:after:hidden">
      <div className="relative mx-auto max-w-full px-10 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem] ">
        <nav
          aria-label="main navigation"
          className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700 "
          role="navigation"
        >
          {/*      <!-- Brand logo --> */}
          <div className="flex justify-center text-center my-4">
            <img className="w-24 h-10" src={logo} alt="" />
          </div>
          {/*      <!-- Mobile trigger --> */}
          <button
            className={`relative order-10 block h-10 w-10 self-center text-white lg:hidden
                ${
                  isToggleOpen
                    ? 'visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 '
                    : ''
                }
              `}
            onClick={() => setIsToggleOpen(!isToggleOpen)}
            aria-expanded={isToggleOpen ? 'true' : 'false'}
            aria-label="Toggle navigation"
          >
            <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
              <span
                aria-hidden="true"
                className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-white transition-all duration-300"
              ></span>
              <span
                aria-hidden="true"
                className="absolute block h-0.5 w-6 transform rounded-full bg-white transition duration-300"
              ></span>
              <span
                aria-hidden="true"
                className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-white transition-all duration-300"
              ></span>
            </div>
          </button>
          {/*      <!-- Navigation links --> */}
          <ul
            role="menubar"
            aria-label="Select page"
            className={`absolute left-0 top-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-blue-950 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
              isToggleOpen
                ? 'visible opacity-100 backdrop-blur-sm'
                : 'invisible opacity-0'
            }`}
          >
            <li role="none" className="flex items-stretch">
              <NavLink
                to="/"
                className="text-xl text-white hover:text-emerald-600 transition-colors duration-300 py-8 px-4"
              >
                Home
              </NavLink>
            </li>
            <li role="none" className="flex items-stretch">
              {users && users?.email ? (
                <NavLink
                  to="/update-profile"
                  className="text-xl text-white hover:text-emerald-600 transition-colors duration-300 py-8 px-4"
                >
                  Update Profile
                </NavLink>
              ) : (
                ''
              )}
            </li>
            <li role="none" className="flex items-stretch">
              {users && users?.email ? (
                <NavLink
                  to="/myprofile"
                  className="text-xl text-white hover:text-emerald-600 transition-colors duration-300 py-8 px-4"
                >
                  My Profile
                </NavLink>
              ) : (
                ''
              )}
            </li>

            <li role="none" className="flex items-center px-4">
              {users && users.email ? (
                <div className="my-2 relative group">
                  <img
                    src={users.photoURL}
                    alt="User Profile"
                    className="w-16 h-16 rounded-full border-2 border-white"
                  />

                  <p className="absolute inset-0 flex items-center justify-center text-sm text-white bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full">
                    {users.displayName}
                  </p>
                </div>
              ) : (
                ''
              )}
            </li>

            <div className="  flex justify-start md:justify-center items-center">
              <button className="btn bg-orange-700">
                {users && users?.email ? (
                  <Link onClick={logOut}>LogOut</Link>
                ) : (
                  <Link to="/login">Login</Link>
                )}
              </button>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
