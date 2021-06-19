import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { downloadProductsAction } from '../../redux/actions/products-actions'
import {Table, Button, Row, Col, Container} from 'react-bootstrap';
import Product from '../Product'

const Products = () => {
  useEffect(() => {
    (async () => await downloadProductsAction())()
  }, [])

  let products = useSelector(state => state.products.products)

  return (
    <div>
      <Container>
        <div>
          <h1>Products <Button href="/products/new" variant="outline-dark"> + </Button> <Button href="/purchase/list" variant="outline-dark"> Purchases </Button></h1> 
        </div>
          <Row>
            <Col>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                        <th>Name</th>
                        <th>Brand</th>
                        <th>Stock</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    { products.length === 0 ? 'No products yet.' : (
                      products.map(product =>
                        <Product
                          name={product.nombre}
                          brand={product.marca}
                          stock={product.stock}
                          price={product.precio}
                          id={product._id}
                        />
                      )
                    )}
                  </tbody>
                </Table>
              </Col> 
          </Row>
        </Container>
    </div>
  )
}

export default Products
