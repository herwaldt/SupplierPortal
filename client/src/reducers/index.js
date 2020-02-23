import { combineReducers } from 'redux';
import overviewReducer from './overviewReducer';
import onTimeReducer from './onTimeReducer';
import dateRangeReducer from './dateRangeReducer';
import qualityReducer from './qualityReducer';
import spendReducer from './spendReducer';

export default combineReducers({
  overview: overviewReducer,
  onTime: onTimeReducer,
  dateRange: dateRangeReducer,
  quality: qualityReducer,
  spend: spendReducer,
});
