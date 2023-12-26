import { Navigate } from 'react-router-dom';
import { AppRoutes } from '../../lib/appRoutes';

function PrivateRoute({ children, isAuth }) {
  return isAuth ? children : <Navigate to={AppRoutes.SIGNIN} />;
}

export default PrivateRoute;