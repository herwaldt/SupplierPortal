import { combineReducers } from 'redux';
import overviewReducer from './overviewReducer';
import deliveryReducer from './deliveryReducer';

export default combineReducers({
  overview: overviewReducer,
  delivery: deliveryReducer,
});
