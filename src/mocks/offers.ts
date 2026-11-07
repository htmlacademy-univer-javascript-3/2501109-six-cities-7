export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: {
    name: string;
    location: { latitude: number; longitude: number; zoom: number };
  };
  location: { latitude: number; longitude: number; zoom: number };
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
  images: string[];
  bedrooms: number;
  maxAdults: number;
  goods: string[];
  host: { name: string; avatarUrl: string; isPro: boolean };
  description: string;
};

export const offers: Offer[] = [
  {
    id: '1',
    title: 'Beautiful & luxurious studio at great location',
    type: 'Apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: { latitude: 52.35514938496378, longitude: 4.673877537499948, zoom: 8 },
    },
    location: { latitude: 52.3909553943508, longitude: 4.85309666406198, zoom: 16 },
    isFavorite: false,
    isPremium: true,
    rating: 4.8,
    previewImage: 'img/apartment-01.jpg',
    images: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg'],
    bedrooms: 3,
    maxAdults: 4,
    goods: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    host: { name: 'Angelina', avatarUrl: 'img/avatar-angelina.jpg', isPro: true },
    description: 'A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
  },
  {
    id: '2',
    title: 'Wood and stone place',
    type: 'Room',
    price: 80,
    city: {
      name: 'Amsterdam',
      location: { latitude: 52.35514938496378, longitude: 4.673877537499948, zoom: 8 },
    },
    location: { latitude: 52.3609553943508, longitude: 4.85309666406198, zoom: 16 },
    isFavorite: true,
    isPremium: false,
    rating: 4.2,
    previewImage: 'img/room.jpg',
    images: ['img/room.jpg', 'img/apartment-01.jpg'],
    bedrooms: 1,
    maxAdults: 2,
    goods: ['Wi-Fi', 'Kitchen', 'Heating'],
    host: { name: 'Max', avatarUrl: 'img/avatar-max.jpg', isPro: false },
    description: 'Небольшая уютная комната в центре города.',
  },
  {
    id: '3',
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
    price: 132,
    city: {
      name: 'Amsterdam',
      location: { latitude: 52.35514938496378, longitude: 4.673877537499948, zoom: 8 },
    },
    location: { latitude: 52.3909553943508, longitude: 4.929309666406198, zoom: 16 },
    isFavorite: true,
    isPremium: false,
    rating: 4.5,
    previewImage: 'img/apartment-02.jpg',
    images: ['img/apartment-02.jpg', 'img/apartment-03.jpg'],
    bedrooms: 2,
    maxAdults: 3,
    goods: ['Wi-Fi', 'Kitchen', 'Heating', 'Towels'],
    host: { name: 'Ivan', avatarUrl: 'img/avatar-max.jpg', isPro: false },
    description: 'Квартира с видом на канал.',
  },
  {
    id: '4',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    price: 180,
    city: {
      name: 'Amsterdam',
      location: { latitude: 52.35514938496378, longitude: 4.673877537499948, zoom: 8 },
    },
    location: { latitude: 52.3809553943508, longitude: 4.939309666406198, zoom: 16 },
    isFavorite: true,
    isPremium: true,
    rating: 5.0,
    previewImage: 'img/apartment-03.jpg',
    images: ['img/apartment-03.jpg', 'img/apartment-01.jpg'],
    bedrooms: 4,
    maxAdults: 6,
    goods: ['Wi-Fi', 'Kitchen', 'Heating', 'Parking', 'Dishwasher'],
    host: { name: 'Anna', avatarUrl: 'img/avatar-angelina.jpg', isPro: true },
    description: 'Просторные апартаменты с большой кроватью.',
  },
];
