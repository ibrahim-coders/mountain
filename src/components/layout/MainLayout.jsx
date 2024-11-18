import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const MainLayout = () => {
  return (
    <div className="max-w-screen-2xl mx-auto items-center text-center">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
