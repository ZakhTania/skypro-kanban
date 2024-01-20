import { Navigate, Outlet } from 'react-router-dom';
import { AppRoutes } from '../../lib/appRoutes';
import useUser from '../../hooks/useUser';

function PrivateRoute() {
  const {user} = useUser();
  return user ? <Outlet /> : <Navigate to={AppRoutes.SIGNIN} />;
}

export default PrivateRoute;