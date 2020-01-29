import { combineReducers } from 'redux';
import overviewReducer from './overviewReducer';
import onTimeReducer from './onTimeReducer';
import dateRangeReducer from './dateRangeReducer';
import qualityReducer from './qualityReducer';

export default combineReducers({
  overview: overviewReducer,
  onTime: onTimeReducer,
  dateRange: dateRangeReducer,
  quality: qualityReducer,
});
