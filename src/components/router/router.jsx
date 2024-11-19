import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import AllMountainCard from '../pages/AllMountainCard';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Hotel from '../pages/Hotel';
import Teem from '../pages/Teem';
import Detalis from '../pages/Detalis';
import ErrorPage from '../pages/ErrorPage';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
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
      {
        path: '/details/:id',
        element: (
          <PrivateRoute>
            <Detalis />
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const res = await fetch('/mountain.json');
          const datas = await res.json();
          const mountainData = datas.find(
            data => data.id === parseInt(params.id)
          );
          return mountainData;
        },
      },
    ],
  },
]);

export default router;
