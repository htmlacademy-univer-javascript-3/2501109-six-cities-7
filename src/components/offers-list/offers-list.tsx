import Card from '../card/card';
import type { Offer } from '../../mocks/offers';

type OffersListProps = {
  offers: Offer[];
  onCardHover?: (id: string | null) => void;
  variant?: 'cities' | 'near-places';
  listClassName?: string;
};

function OffersList({
  offers,
  onCardHover,
  variant = 'cities',
  listClassName = 'cities__places-list places__list tabs__content',
}: OffersListProps): JSX.Element {
  return (
    <div className={listClassName}>
      {offers.map((offer) => (
        <Card
          key={offer.id}
          offer={offer}
          variant={variant}
          onMouseEnter={() => onCardHover?.(offer.id)}
          onMouseLeave={() => onCardHover?.(null)}
        />
      ))}
    </div>
  );
}

export default OffersList;
