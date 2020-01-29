import axios from 'axios';
import { FETCH_OVERVIEW, UPDATE_DATERANGE, FETCH_ONTIME } from './types';

// export const fetchReceipts = () => async (dispatch) => {
//   const res = await axios.get('/api/data/receipt');

//   dispatch({ type: FETCH_RECEIPTS, payload: res.data });
// };

export function updateDateRange(payload) {
  return { type: UPDATE_DATERANGE, payload }
};

export const fetchOverview = () => async (dispatch) => {

  const res = await axios.all([
    axios.get('/api/data/receiptOverview/3'),
    axios.get('/api/data/lateReceiptOverview/3'),
    axios.get('/api/data/defectiveOverview/3'),

    axios.get('/api/data/receiptOverview/6'),
    axios.get('/api/data/lateReceiptOverview/6'),
    axios.get('/api/data/defectiveOverview/6'),

    axios.get('/api/data/receiptOverview/12'),
    axios.get('/api/data/lateReceiptOverview/12'),
    axios.get('/api/data/defectiveOverview/12'),
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

export const fetchOnTime = () => async (dispatch) => {
  let merged = [];
  const res = await axios.all([
    axios.get('/api/data/receiptsByMonth/12'),
    axios.get('/api/data/lateByMonth/12'),
  ]).then(axios.spread((...responses) => {
    const receipts = responses[0]['data'];
    const lates = responses[1]['data'];
    for (let i=0; i<receipts.length; i++) {
      // const id = new Date(receipts[i]._id);
      // id.setHours(0,0,0,0);
      merged.push({
        ...receipts[i], 
        ...(lates.find((itmInner) => itmInner._id === receipts[i]._id))},
      );
    }
  }));

  let final = []
  await merged.map((data) => {
    const { _id, receiptsByMonth, lateReceiptsByMonth } = data;
    const id = new Date(_id);
    id.setHours(0,0,0,0);
    data._id = id;
    const OnTimePercent = Math.round((( receiptsByMonth - lateReceiptsByMonth ) / receiptsByMonth ) * 100);
    final.push({
      ...data,
      OnTimePercent
    })
  });

  dispatch({ type: FETCH_ONTIME, payload: final });
};
