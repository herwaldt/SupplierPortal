import { FETCH_DELIVERY } from '../actions/types';

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_DELIVERY:
      return action.payload;
    default:
      return state;
  }
}
