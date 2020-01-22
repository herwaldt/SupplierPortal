import { combineReducers } from 'redux';
import overviewReducer from './overviewReducer';
import receiptsReducer from './receiptsReducer';
import lateReducer from './lateReducer';
import dateRangeReducer from './dateRangeReducer';

export default combineReducers({
  overview: overviewReducer,
  receipt: receiptsReducer,
  late: lateReducer,
  dateRange: dateRangeReducer,
});
