import { UPDATE_DATERANGE } from '../actions/types';

const initialState = '3Months';

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_DATERANGE:
      return action.payload;
    default:
      return state;
  }
}
