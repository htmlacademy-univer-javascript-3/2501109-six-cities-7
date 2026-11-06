import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../const';

type PrivateRouteProps = {
  authorizationStatus: 'auth' | 'no-auth';
  children: JSX.Element;
};

function PrivateRoute({ authorizationStatus, children }: PrivateRouteProps): JSX.Element {
  return authorizationStatus === 'auth' ? children : <Navigate to={AppRoute.Login} />;
}

export default PrivateRoute;
