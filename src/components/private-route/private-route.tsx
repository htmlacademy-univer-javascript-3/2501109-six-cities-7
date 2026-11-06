import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../const';

type PrivateRouteProps = {
  authorizationStatus: boolean;
  children: JSX.Element;
};

function PrivateRoute({ authorizationStatus, children }: PrivateRouteProps): JSX.Element {
  return authorizationStatus ? children : <Navigate to={AppRoute.Login} />;
}

export default PrivateRoute;
