import Card from '../card/card';
import type { Offer } from '../../mocks/offers';

type OffersListProps = {
  offers: Offer[];
  onCardHover: (id: string | null) => void;
};

function OffersList({ offers, onCardHover }: OffersListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Card
          key={offer.id}
          offer={offer}
          onMouseEnter={(id) => onCardHover(id)}
          onMouseLeave={() => onCardHover(null)}
        />
      ))}
    </div>
  );
}

export default OffersList;
