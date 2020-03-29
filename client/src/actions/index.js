import axios from 'axios';
import { FETCH_RECEIPTS } from './types';

// eslint-disable-next-line import/prefer-default-export
export const fetchReceipts = () => async (dispatch) => {
  const res = await axios.get('/api/data/receipt');

  dispatch({ type: FETCH_RECEIPTS, payload: res.data });
};
