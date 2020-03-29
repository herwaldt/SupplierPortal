import { FETCH_OVERVIEW } from '../actions/types';

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_OVERVIEW:
      return action.payload;
    default:
      return state;
  }
}
