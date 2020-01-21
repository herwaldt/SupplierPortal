import { FETCH_RECEIPTS } from '../actions/types';

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_RECEIPTS:
      return action.payload;
    default:
      return state;
  }
}
