import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const MainLayout = () => {
  return (
    <div className="max-w-screen-2xl mx-auto items-center text-center font-poppins">
      <ToastContainer position="top-center" autoClose={3000} />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
