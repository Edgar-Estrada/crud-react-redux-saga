import { combineReducers } from 'redux';
import productsReducer from './products-reducer';
import purchasesReducer from './purchases-reducer';

export default combineReducers({
  products: productsReducer,
  purchases: purchasesReducer
})

// If we are going to have several reducers, we must use combine them because there can only be one
