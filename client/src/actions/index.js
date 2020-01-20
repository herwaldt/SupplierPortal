import axios from 'axios';
import { FETCH_OVERVIEW, FETCH_DELIVERY } from './types';

// export const fetchReceipts = () => async (dispatch) => {
//   const res = await axios.get('/api/data/receipt');

//   dispatch({ type: FETCH_RECEIPTS, payload: res.data });
// };

export const fetchOverview3month = () => async (dispatch) => {

  const res = await axios.all([
    axios.get('api/data/receiptOverview/3'),
    axios.get('api/data/lateReceiptOverview/3'),
    axios.get('api/data/defectiveOverview/3'),

    axios.get('api/data/receiptOverview/6'),
    axios.get('api/data/lateReceiptOverview/6'),
    axios.get('api/data/defectiveOverview/6'),

    axios.get('api/data/receiptOverview/12'),
    axios.get('api/data/lateReceiptOverview/12'),
    axios.get('api/data/defectiveOverview/12'),
  ]).then(axios.spread((...responses) => {
    return responses.reduce((dataByMonth, response) => {
      const { _id, ...data } = response.data;
      if (dataByMonth[_id]) {
          dataByMonth[_id] = { ...data, ...dataByMonth[_id] };
      } else {
          dataByMonth[_id] = data;
      }
      return dataByMonth;
  }, {});
  }));

  dispatch({ type: FETCH_OVERVIEW, payload: res });
};

export const fetchDelivery = () => async (dispatch) => {

  const res = await axios.all([
    axios.get('api/data/lateByMonth/12'),
    axios.get('api/data/receiptsByMonth/12'),
  ]).then(axios.spread((...responses) => {
    return responses.reduce((dataByMonth, response) => {
      const { _id, ...data } = response.data;
      if (dataByMonth[_id]) {
          dataByMonth[_id] = { ...data, ...dataByMonth[_id] };
      } else {
          dataByMonth[_id] = data;
      }
      return dataByMonth;
  }, {});
  }));

  console.log(res);

  dispatch({ type: FETCH_DELIVERY, payload: res });
};
