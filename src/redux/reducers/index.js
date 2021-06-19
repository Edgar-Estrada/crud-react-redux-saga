import { combineReducers } from 'redux';
import productsReducer from './products-reducer';
import purchasesReducer from './purchases-reducer';

export default combineReducers({
  products: productsReducer,
  purchases: purchasesReducer
})

