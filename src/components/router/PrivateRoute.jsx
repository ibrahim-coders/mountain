import { useContext } from 'react';
import { AuthContext } from '../AuthContext/AuthProvider ';
import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { users, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  if (loading) {
    return <span className="loading loading-ring loading-lg"></span>;
  }
  if (users && users.email) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login" />;
};

export default PrivateRoute;
