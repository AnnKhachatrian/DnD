import { combineReducers } from 'redux';
import ReasonsReducer from './reducer_reasons';

const rootReducer = combineReducers({
  reasons: ReasonsReducer,
});

export default rootReducer;
