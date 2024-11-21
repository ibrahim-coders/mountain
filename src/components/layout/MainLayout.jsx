import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

const MainLayout = () => {
  const location = useLocation();
  const routeTitles = {
    '/': 'Home | HIKKER',
    '/allmountain': 'All Mountains | HIKKER',
    '/myprofile': 'My Profile | HIKKER',
    '/Update-Profile': 'Update Profile | HIKKER',
    '/login': 'Login | HIKKER',
    '/register': 'Register | HIKKER',
  };

  useEffect(() => {
    const currentTitle = routeTitles[location.pathname] || 'HIKKER';
    document.title = currentTitle;
  }, [location.pathname]);

  return (
    <div className="w-11/12 mx-auto items-center text-center font-poppins">
      <ToastContainer position="top-center" autoClose={3000} />
      <Navbar />
      <div className="max-w-screen-xl">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
