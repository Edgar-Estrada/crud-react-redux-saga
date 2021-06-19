import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { downloadPurchasesAction } from '../../redux/actions/products-actions'
import {Table, Button, Row, Col, Container} from 'react-bootstrap';
import Purchase from '../Purchase/index'

const ListPurchases = () => {
  useEffect(() => {
    (async () => await downloadPurchasesAction())()
  }, [])

  let purchases = useSelector(state => state.purchases.purchases)

  return (
    <div>
      <Container>
        <div>
          <h1>Purchases <Button href="/" variant="outline-dark"> Home </Button></h1> 
        </div>
          <Row>
            <Col>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                        <th>Order</th>
                        <th>Product Name</th>
                        <th>Product Brand</th>
                        <th>Product Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    { purchases.length === 0 ? 'No purchases yet.' : (
                      purchases.map(purchase =>
                        <Purchase
                          key={purchase.id}
                          name={purchase.nombreProducto}
                          brand={purchase.marcaProducto}
                          price={purchase.precioProducto}
                          id={purchase._id}
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

export default ListPurchases
