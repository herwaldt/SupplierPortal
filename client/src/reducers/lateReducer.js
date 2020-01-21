import { FETCH_LATE } from '../actions/types';

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_LATE:
      return action.payload;
    default:
      return state;
  }
}
