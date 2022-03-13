import { combineReducers } from 'redux';
import { newsReducer } from './news';
import { reqStatusReducer } from './req-status';

export default combineReducers({
  news: newsReducer,
  reqStatus: reqStatusReducer,
})
