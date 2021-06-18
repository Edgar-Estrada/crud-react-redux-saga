import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { addProductAction } from '../../redux/actions/products-actions'
import {Button, Row, Container, Form} from 'react-bootstrap';

const Newproduct = ({ history }) => {
  const [nombre, setName] = useState('')
  const [marca, setBrand] = useState('')
  const [stock, setStock] = useState(1)
  const [precio, setPrice] = useState(0)

  // access the store state
  const loading = useSelector(state => state.products.loading) // true o false
  const error = useSelector(state => state.products.error) // true o false

  const submitNewProduct = async event => {
    event.preventDefault()
    // create new product
    await addProductAction({ nombre, marca, stock, precio })
    // redirect to main component
    history.push('/')
  }

  return (
    <div>
      <Container>
        <h1>Add New Product</h1>
        <Form onSubmit={submitNewProduct}>
          <Form.Group className="mb-3">
            <Form.Label>Product Name:</Form.Label>
            <Form.Control type="text" placeholder="Enter product name" value={nombre} onChange={event => setName(event.target.value)} required/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Product Brand:</Form.Label>
            <Form.Control type="text" placeholder="Enter product brand" value={marca} onChange={event => setBrand(event.target.value)} required/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Product Stock:</Form.Label>
            <Form.Control type="number" min='1' placeholder="Enter product stock" value={stock} onChange={event => setStock(Number(event.target.value))} required/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Product Price:</Form.Label>
            <Form.Control type="number" min='0' placeholder="Enter product price" value={precio} onChange={event => setPrice(Number(event.target.value))} required/>
          </Form.Group>
          <Container>
            <Row className="mb-3">
              <Button variant="danger" type="submit" href="/"> Cancel </Button>
            </Row>
            <Row>
              <Button variant="success" type="submit"> Submit </Button>
            </Row>
          </Container>
        </Form>
      </Container>
    </div>
  )
}

export default Newproduct