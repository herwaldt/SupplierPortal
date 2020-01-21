import { combineReducers } from 'redux';
import overviewReducer from './overviewReducer';
import receiptsReducer from './receiptsReducer';
import lateReducer from './lateReducer';

export default combineReducers({
  overview: overviewReducer,
  receipt: receiptsReducer,
  late: lateReducer,
});
