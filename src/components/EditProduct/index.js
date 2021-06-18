import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { editProductAction } from '../../redux/actions/products-actions';
import { useHistory } from 'react-router-dom'
import { Button, Row, Container, Form} from 'react-bootstrap';

const EditProduct = () => {
  const history = useHistory()
  const productEdit = useSelector(state => state.products.editProduct)
  const [product, setProduct] = useState({
    name: '',
    brand: '',
    stock: '',
    price: ''
  })

  // fill state
  useEffect(() => {
    setProduct(productEdit)
  }, [productEdit])


  const submitEditProduct = event => {
    event.preventDefault()
    editProductAction(product)
    history.push('/')
  }

  // read data from form
  const onChangeForm = event => {
    setProduct({
      ...product,
      [event.target.name] : event.target.value
    })
  }

  return (
    <div>
      <Container>
        <h1>Edit Product</h1>
        <Form onSubmit={submitEditProduct}>
          <Form.Group className="mb-3">
            <Form.Label>Product Name:</Form.Label>
            <Form.Control type="text" name='name' value={product.name} onChange={onChangeForm} required/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Product Brand:</Form.Label>
            <Form.Control type="text" name='brand' value={product.brand} onChange={onChangeForm} required/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Product Stock:</Form.Label>
            <Form.Control type="number" name='stock' min='1' value={product.stock} onChange={onChangeForm} required/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Product Price:</Form.Label>
            <Form.Control type="number" name='price' min='0' value={product.price} onChange={onChangeForm} required/>
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

export default EditProduct