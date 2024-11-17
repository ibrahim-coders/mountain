import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import AllMountainCard from '../pages/AllMountainCard';

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
    ],
  },
]);

export default router;
