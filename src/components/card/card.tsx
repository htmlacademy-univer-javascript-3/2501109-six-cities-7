import { Link } from 'react-router-dom';
import type { Offer } from '../../mocks/offers';
import { AppRoute } from '../../const';

type CardProps = {
  offer: Offer;
  variant?: 'cities' | 'near-places' | 'favorites';
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

function Card({
  offer,
  variant = 'cities',
  onMouseEnter,
  onMouseLeave,
}: CardProps): JSX.Element {
  const isPremium = offer.isPremium;
  const isFavorite = offer.isFavorite;

  const cardClass = {
    cities: 'cities__card',
    'near-places': 'near-places__card',
    favorites: 'favorites__card',
  }[variant];

  const imageWrapperClass = {
    cities: 'cities__image-wrapper',
    'near-places': 'near-places__image-wrapper',
    favorites: 'favorites__image-wrapper',
  }[variant];

  const imageSize = {
    cities: { width: 260, height: 200 },
    'near-places': { width: 150, height: 110 },
    favorites: { width: 150, height: 110 },
  }[variant];

  const infoClass = {
    cities: 'cities__card-info',
    'near-places': 'near-places__card-info',
    favorites: 'favorites__card-info',
  }[variant];

  return (
    <article
      className={`${cardClass} place-card`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${imageWrapperClass} place-card__image-wrapper`}>
        <Link to={`${AppRoute.Offer.replace(':id', offer.id)}`}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={imageSize.width}
            height={imageSize.height}
            alt={offer.title}
          />
        </Link>
      </div>
      <div className={`${infoClass} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&nbsp;/ night</span>
          </div>
          <button
            className={`place-card__bookmark-button button${
              isFavorite ? ' place-card__bookmark-button--active' : ''
            }`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${Math.round(offer.rating) * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer.replace(':id', offer.id)}`}>
            {offer.title}
          </Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default Card;
