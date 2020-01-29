import { combineReducers } from 'redux';
import overviewReducer from './overviewReducer';
import onTimeReducer from './onTimeReducer';
import dateRangeReducer from './dateRangeReducer';

export default combineReducers({
  overview: overviewReducer,
  onTime: onTimeReducer,
  dateRange: dateRangeReducer,
});
