import { FETCH_ONTIME } from '../actions/types';

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_ONTIME:
      return action.payload;
    default:
      return state;
  }
}
