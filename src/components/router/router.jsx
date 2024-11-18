import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import AllMountainCard from '../pages/AllMountainCard';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Hotel from '../pages/Hotel';
import Teem from '../pages/Teem';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <Home />,
        loader: () => fetch('mountain.json'),
      },
      {
        path: '/allmountain',
        element: <AllMountainCard />,
        loader: () => fetch('mountain.json'),
      },
      {
        path: '/hotel',
        element: <Hotel />,
      },
      {
        path: '/ourteem',
        element: <Teem />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
]);

export default router;
