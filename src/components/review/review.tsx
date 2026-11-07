import type { Review } from '../../mocks/reviews';

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return `${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
};

const formatDateISO = (dateString: string): string => new Date(dateString).toISOString().split('T')[0];

type ReviewProps = {
  review: Review;
};

function Review({ review }: ReviewProps): JSX.Element {
  const ratingWidth = `${Math.round(review.rating) * 20}%`;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={review.user.avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{review.user.name}</span>
        {review.user.isPro && (
          <span className="reviews__user-status">Pro</span>
        )}
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: ratingWidth }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{review.comment}</p>
        <time className="reviews__time" dateTime={formatDateISO(review.date)}>
          {formatDate(review.date)}
        </time>
      </div>
    </li>
  );
}

export default Review;
