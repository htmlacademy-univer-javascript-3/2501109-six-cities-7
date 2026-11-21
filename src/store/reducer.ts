import { createReducer } from '@reduxjs/toolkit';
import type { City, Offer } from '../mocks/offers';
import { changeCity, fillOffers } from './action';
import { DEFAULT_CITY } from '../mocks/offers';

type State = {
  city: City;
  offers: Offer[];
};

const initialState: State = {
  city: DEFAULT_CITY,
  offers: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOffers, (state, action) => {
      state.offers = action.payload;
    });
});
