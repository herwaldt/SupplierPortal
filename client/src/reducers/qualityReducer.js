import { FETCH_QUALITY } from '../actions/types';

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_QUALITY:
      return action.payload;
    default:
      return state;
  }
}
