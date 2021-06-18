import { put, takeEvery, all, call } from 'redux-saga/effects'
import {
  ADD_PRODUCT,
  BEGIN_PRODUCTS_DOWNLOAD,
  RETRIEVE_PRODUCT_DELETE,
  BEGIN_EDIT_PRODUCT,
  RETRIEVE_PRODUCT_BUY,
  BEGIN_PURCHASES_DOWNLOAD
} from '../actions'

import {
  downloadProductsOkAction,
  downloadProductsErrorAction,
  addProductOkAction,
  addProductErrorAction,
  deleteProductOkAction,
  deleteProductErrorAction,
  editProductOkAction,
  editProductErrorAction,
  buyProductErrorAction,
  buyProductOkAction,
  downloadProductsAction,
  downloadPurchasesErrorAction,
  downloadPurchasesOkAction
} from '../actions/products-actions'

import {
  retrieveProductsDB,
  addProductDB,
  deleteProductDB,
  editProductDB,
  buyProductDB,
  getPurchasesDB
} from '../../api-calls'

// Retrieve products
// worker saga
function* retrieveProducts() {
  try {
    const {data} = yield call(retrieveProductsDB)
    yield downloadProductsOkAction(data)
  } catch (error) {
    yield put(downloadProductsErrorAction())
  }
}

// watcher saga
function* retrieveProductsSaga() {
  yield takeEvery(BEGIN_PRODUCTS_DOWNLOAD, retrieveProducts)
}


// Create new product
// worker saga
function* addProduct(action) {
  const product = action.product
  try {
    yield call(addProductDB, product)
    yield addProductOkAction(product) // download actualized products
    window.alert('Product Added Successfulluy')
  } catch (error) {
    yield addProductErrorAction(true)
    window.alert('An error ocurred')
  }
}

// watcher saga
function* addProductSaga() {
  yield takeEvery(ADD_PRODUCT, addProduct)
}


// Delete product
// worker saga
function* deleteProduct(action) {
  const id = action.payload
  try {
    yield call(deleteProductDB, id)
    yield deleteProductOkAction()
    window.alert('The product has been deleted');
  } catch (error) {
    yield deleteProductErrorAction()
    window.alert('An error ocurred')
  }
}

// watcher saga
function* deleteProductSaga() {
  yield takeEvery(RETRIEVE_PRODUCT_DELETE, deleteProduct)
}


// Edit product
// worker saga
function* editProduct(action) {
  const product = action.product
  try {
    yield call(editProductDB, product)
    yield editProductOkAction(product)
    window.alert('The product has been updated')
  } catch (error) {
    yield editProductErrorAction()
    window.alert('An error ocurred')
  }
}

// watcher saga
function* editProductSaga() {
  yield takeEvery(BEGIN_EDIT_PRODUCT, editProduct)
}

// Buy product
// worker saga
function* buyProduct(action) {
  const id = action.payload
  try {
    yield call(buyProductDB, id)
    yield buyProductOkAction()
    window.alert('The product has been purchased');
  } catch (error) {
    yield buyProductErrorAction()
    window.alert('An error ocurred')
  }
}

// watcher saga
function* buyProductSaga() {
  yield takeEvery(RETRIEVE_PRODUCT_BUY, buyProduct)
}

// Retrieve purchases
// worker saga
function* retrievePurchases() {
  try {
    const {data} = yield call(getPurchasesDB)
    yield downloadPurchasesOkAction(data)
  } catch (error) {
    yield put(downloadPurchasesErrorAction())
  }
}

// watcher saga
function* retrievePurchasesSaga() {
  yield takeEvery(BEGIN_PURCHASES_DOWNLOAD, retrievePurchases)
}

// Export all sagas
export default function* rootSaga() {
  yield all([
    retrieveProductsSaga(),
    addProductSaga(),
    deleteProductSaga(),
    editProductSaga(),
    buyProductSaga(),
    retrievePurchasesSaga()
  ])
}
