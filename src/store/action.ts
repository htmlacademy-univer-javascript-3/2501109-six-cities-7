import { createAction } from '@reduxjs/toolkit';
import type { City, Offer } from '../mocks/offers';

export const changeCity = createAction<City>('city/change');
export const fillOffers = createAction<Offer[]>('offers/fill');
