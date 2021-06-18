import React from 'react'
import { useHistory } from 'react-router-dom'
import { deleteProductAction, retrieveProductEditAction, buyProductAction } from '../../redux/actions/products-actions'
import {Button, Row, Col} from 'react-bootstrap';
import { downloadProductsAction } from '../../redux/actions/products-actions'

const Product = (product) => {
  const history = useHistory()
  const { name, price, brand, stock, id } = product

  const confirmDeleteProduct = id => {
    deleteProductAction(id)
    downloadProductsAction()
  }

  const buyProduct = id =>{
    buyProductAction(id)
    downloadProductsAction()
  }

  const redirectionEdition = product => {
    retrieveProductEditAction(product)
    history.push(`products/edit/${id}`)
  }

  return (
    <tr>
      <td>{name}</td>
      <td>{brand}</td>
      <td>{stock}</td>
      <td>$ {price}</td>
      <td>
        <Row>
            <Col sm={4}>
            <Button variant="warning" type='button' onClick={() => redirectionEdition(product)}>Edit</Button>
            </Col>
            <Col sm={4}>
            <Button variant="danger" type='button' onClick={() => confirmDeleteProduct(id)}>Delete</Button>
            </Col>
            <Col sm={4}>
              <Button variant="success" type='button' onClick={() => buyProduct(id)}>Buy</Button>
            </Col>
        </Row>
      </td>
    </tr>
  )
}

export default Product