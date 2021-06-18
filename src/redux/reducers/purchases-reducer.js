import {
    BEGIN_PURCHASES_DOWNLOAD,
    PURCHASES_DOWNLOAD_OK,
    PURCHASES_DOWNLOAD_ERROR
  } from '../actions'
  
  const initialState = {
    purchases: [],
    error: false
  }
  
  export default function(state = initialState, action) {
    switch(action.type) {

      case BEGIN_PURCHASES_DOWNLOAD:
        return {
          ...state,
          product: action.product
        }

      case PURCHASES_DOWNLOAD_ERROR:
        return {
          ...state,
          error: action.payload
        }
  
      case PURCHASES_DOWNLOAD_OK:
        return {
          ...state,
          error: null,
          purchases: action.payload
        }
  
      default:
        return state
    }
  }