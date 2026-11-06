import MainPage from '../../pages/main-page/main-page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { AppRoute } from '../../const';

type AppProps = {
  offersCount: number;
};

function App({ offersCount }: AppProps): JSX.Element {
  const authorizationStatus = 'no-auth' as const;

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage offersCount={offersCount} />} />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Offer} element={<OfferPage />} />
        <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
