import axios from 'axios';
import {
  FETCH_OVERVIEW, UPDATE_DATERANGE, FETCH_ONTIME, FETCH_QUALITY,
} from './types';

const DATA_ROOT = '/api/data';

export function updateDateRange(payload) {
  return { type: UPDATE_DATERANGE, payload };
}

export const fetchOverview = () => async (dispatch) => {
  const overviewMonths = [3, 6, 12];
  const overviewEndpoints = ['receiptOverview', 'lateReceiptOverview', 'defectiveOverview'];
  const overviewRequests = overviewMonths.reduce((requests, month) => {
    const monthRequests = overviewEndpoints.map((endpoint) => axios.get(`${DATA_ROOT}/${endpoint}/${month}`));
    requests.push(...monthRequests);
    return requests;
  }, []);

  const res = await axios.all(overviewRequests)
    .then(axios.spread((...responses) => responses.reduce((dataByMonth, response) => {
      const { _id, ...data } = response.data;
      if (dataByMonth[_id]) {
        dataByMonth[_id] = { ...data, ...dataByMonth[_id] };
      } else {
        dataByMonth[_id] = data;
      }
      return dataByMonth;
    }, {})));

  dispatch({ type: FETCH_OVERVIEW, payload: res });
};

export const fetchOnTime = () => async (dispatch) => {
  // const merged = [];
  const merged = await axios.all([
    axios.get(`${DATA_ROOT}/receiptsByMonth/12`),
    axios.get(`${DATA_ROOT}/lateByMonth/12`),
  ]).then(axios.spread((...responses) => {
    const receipts = responses[0].data;
    const lates = responses[1].data;

    return receipts.map((receipt) => ({
      ...receipt,
      ...(lates.find((itmInner) => itmInner._id === receipt._id)),
    }));
  }));

  const final = await merged.map((data) => {
    const { _id, receiptsByMonth, lateReceiptsByMonth } = data;
    const id = new Date(_id);
    id.setHours(0, 0, 0, 0);
    data._id = id;
    const OnTimePercent = Math.round((
      (receiptsByMonth - lateReceiptsByMonth) / receiptsByMonth) * 100) || 0;
    return {
      ...data,
      OnTimePercent,
    };
  });

  dispatch({ type: FETCH_ONTIME, payload: final });
};

export const fetchQuality = () => async (dispatch) => {
  const merged = [];
  await axios.all([
    axios.get(`${DATA_ROOT}/qtyByMonth/12`),
    axios.get(`${DATA_ROOT}/qualityByMonth/12`),
  ]).then(axios.spread((...responses) => {
    const qtybyMonth = responses[0].data;
    const qtyDefectivebyMonth = responses[1].data;
    for (let i = 0; i < qtybyMonth.length; i++) {
      merged.push({
        ...qtybyMonth[i],
        ...(qtyDefectivebyMonth.find((itmInner) => itmInner._id === qtybyMonth[i]._id)),
      });
    }
  }));

  const final = [];
  await merged.map((data) => {
    const { _id, qtybyMonth, qtyDefectivebyMonth } = data;
    const id = new Date(_id);
    id.setHours(0, 0, 0, 0);
    data._id = id;
    const defectiveParts = Math.round(((qtyDefectivebyMonth) / qtybyMonth) * 1000000) || 0;
    return final.push({
      ...data,
      defectiveParts,
    });
  });

  dispatch({ type: FETCH_QUALITY, payload: final });
};
