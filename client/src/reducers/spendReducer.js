import { FETCH_SPEND } from '../actions/types';

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_SPEND:
      return action.payload;
    default:
      return state;
  }
}
