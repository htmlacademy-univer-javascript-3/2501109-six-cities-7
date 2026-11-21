import type { City } from '../../mocks/offers';

type CitiesListProps = {
  cities: City[];
  activeCity: City;
  onCityChange: (city: City) => void;
};

function CitiesList({
  cities,
  activeCity,
  onCityChange,
}: CitiesListProps): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li className="locations__item" key={city.name}>
          <a
            className={`locations__item-link tabs__item${
              city.name === activeCity.name ? ' tabs__item--active' : ''
            }`}
            href="#todo"
            onClick={(evt) => {
              evt.preventDefault();
              onCityChange(city);
            }}
          >
            <span>{city.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default CitiesList;
