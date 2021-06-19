import axios from 'axios'

const axiosProduct = axios.create({
  baseURL: 'http://localhost:4000/'
})
export async function retrieveProductsDB() {
  return await axiosProduct.get('/productos')
}

export async function addProductDB(product) {
  return await axiosProduct.post('/productos', product)
}

export async function deleteProductDB(id) {
  return await axiosProduct.put(`/productos/eliminar/${id}`);
}

export async function editProductDB(product) {
  return await axiosProduct.put(`/productos/${product.id}`, product)
}

export async function buyProductDB(id){
  return await axiosProduct.get(`/compras/${id}`)
}

export async function getPurchasesDB(){
  return await axiosProduct.get('/compras')
}
