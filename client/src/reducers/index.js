import { combineReducers } from 'redux';
import receiptReducer from './receiptReducer';

export default combineReducers({
  receipts: receiptReducer,
});
