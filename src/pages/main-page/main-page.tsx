import { useState, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity } from '../../store/action';
import { CITIES } from '../../mocks/offers';
import type { City } from '../../mocks/offers';
import OffersList from '../../components/offers-list/offers-list';
import CitiesList from '../../components/cities-list/cities-list';
import Map from '../../components/map/map';
import Sort from '../../components/sort/sort';
import { SortType } from '../../components/sort/const';

function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const city = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);
  const [currentSort, setCurrentSort] = useState<SortType>(SortType.Popular);

  const cityOffers = useMemo(() => {
    const filtered = offers.filter((offer) => offer.city.name === city.name);

    switch (currentSort) {
      case SortType.PriceLowToHigh:
        return [...filtered].sort((a, b) => a.price - b.price);
      case SortType.PriceHighToLow:
        return [...filtered].sort((a, b) => b.price - a.price);
      case SortType.TopRated:
        return [...filtered].sort((a, b) => b.rating - a.rating);
      default:
        return filtered;
    }
  }, [offers, city.name, currentSort]);

  const handleCityChange = (newCity: City) => {
    dispatch(changeCity(newCity));
  };

  const handleCardHover = (id: string | null) => {
    setActiveOfferId(id);
  };

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList
              cities={CITIES}
              activeCity={city}
              onCityChange={handleCityChange}
            />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {cityOffers.length} places to stay in {city.name}
              </b>
              <Sort currentSort={currentSort} onSortChange={setCurrentSort} />
              <OffersList
                offers={cityOffers}
                onCardHover={handleCardHover}
              />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  offers={cityOffers}
                  city={city}
                  activeOfferId={activeOfferId}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
