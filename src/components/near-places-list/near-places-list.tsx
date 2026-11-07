import Card from '../card/card';
import type { Offer } from '../../mocks/offers';

type NearPlacesListProps = {
  offers: Offer[];
};

function NearPlacesList({ offers }: NearPlacesListProps): JSX.Element {
  return (
    <div className="near-places__list places__list">
      {offers.map((offer) => (
        <Card key={offer.id} offer={offer} variant="near-places" />
      ))}
    </div>
  );
}

export default NearPlacesList;
