import { Link } from 'react-router-dom';
import type { Offer } from '../../mocks/offers';

type CardProps = {
  offer: Offer;
  onMouseEnter?: (id: string) => void;
  onMouseLeave?: () => void;
  variant?: 'cities' | 'favorites' | 'near-places';
};

function Card({
  offer,
  onMouseEnter,
  onMouseLeave,
  variant = 'cities',
}: CardProps): JSX.Element {
  const wrapperClass = `${variant}__card place-card`;
  const imageWrapperClass = `${variant}__image-wrapper place-card__image-wrapper`;
  const infoClass =
    variant === 'favorites'
      ? 'favorites__card-info place-card__info'
      : 'place-card__info';

  const imageSize =
    variant === 'favorites'
      ? { width: 150, height: 110 }
      : { width: 260, height: 200 };

  const ratingWidth = `${Math.round(offer.rating) * 20}%`;

  return (
    <article
      className={wrapperClass}
      onMouseEnter={() => onMouseEnter?.(offer.id)}
      onMouseLeave={() => onMouseLeave?.()}
    >
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={imageWrapperClass}>
        <Link to={`/offer/${offer.id}`}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={imageSize.width}
            height={imageSize.height}
            alt="Place image"
          />
        </Link>
      </div>
      <div className={infoClass}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&nbsp;/&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button${
              offer.isFavorite ? ' place-card__bookmark-button--active' : ''
            }`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">
              {offer.isFavorite ? 'In bookmarks' : 'To bookmarks'}
            </span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: ratingWidth }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default Card;
