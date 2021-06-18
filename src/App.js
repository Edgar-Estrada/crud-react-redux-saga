import React from 'react'
import Products from './components/Products'
import NewProduct from './components/NewProduct'
import EditProduct from './components/EditProduct'
import ListPurchases from './components/ListPurchases/index';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store/store'

function App() {
  return (
    <Router>
      <Provider store={ store }>
        <div>
          <Switch>
            <Route exact path='/' component={Products} />
            <Route exact path='/products/new' component={NewProduct} />
            <Route exact path='/products/edit/:_id' component={EditProduct} />
            <Route exact path='/purchase/list' component={ListPurchases} />
          </Switch>
        </div>
      </Provider>
    </Router>
  )
}

export default App