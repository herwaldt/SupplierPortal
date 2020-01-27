import axios from 'axios';
import { FETCH_OVERVIEW, FETCH_RECEIPTS, FETCH_LATE } from './types';

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

export const fetchLateByMonth = () => async (dispatch) => {
  const res = await axios.get('api/data/lateByMonth/12');

  dispatch({ type: FETCH_LATE, payload: res.data });
};

// export const fetchReceiptsByMonth = () => async (dispatch) => {
//   const res = await axios.get('api/data/receiptsByMonth/12')

//   dispatch({ type: FETCH_RECEIPTS, payload: res.data });
// };


// BELOW WILL TAKE THE RECEIPTS BY MONTH AND WILL MAKE THE _ID = THE MONTH DATE
export const fetchReceiptsByMonth = () => async (dispatch) => {

  const res = await axios.all([
    axios.get('api/data/receiptsByMonth/12'),
  ]).then(axios.spread((...responses) => {
    console.log(...responses);

    return responses.map((response) => {
    const resp = response.data;
    return resp.reduce((dataByMonth, response) => {
      const { _id, receiptsByMonth } = response;
      const id = new Date(_id);
      console.log(id);
      if (dataByMonth[id]) {
          dataByMonth[id] = { receiptsByMonth, ...dataByMonth[id] };
      } else {
          dataByMonth[id] = receiptsByMonth;
      }
      return dataByMonth;
    }, {});
  });
  }));

  console.log(res);

  dispatch({ type: FETCH_RECEIPTS, payload: res });
};

// BELOW WILL DATE BOTH (BY MONTH DATAS) AND REPLACE THE _ID WITH THE DATE
// export const fetchDelivery = () => async (dispatch) => {

//   const res = await axios.all([
//     axios.get('api/data/lateByMonth/12'),
//     axios.get('api/data/receiptsByMonth/12'),
//   ]).then(axios.spread((...responses) => {
//     console.log(...responses);

//     return responses.map((response) => {
//       // console.log(response.data);
//     const resp = response.data;
//     return resp.reduce((dataByMonth, response) => {
//       // console.log(response);
//       const { _id, lateReceiptsByMonth, receiptsByMonth } = response;
//       const data = (receiptsByMonth ? { 'receiptsByMonth': receiptsByMonth } : {'lateReceiptsByMonth': lateReceiptsByMonth});
//       // console.log( _id );
//       // console.log(data);
//       if (dataByMonth[_id]) {
//           dataByMonth[_id] = { data, ...dataByMonth[_id] };
//       } else {
//           dataByMonth[_id] = data;
//       }
//       return dataByMonth;
//     }, {});
//   });
//   }));

//   console.log(res);

//   dispatch({ type: FETCH_DELIVERY, payload: res });
// };
