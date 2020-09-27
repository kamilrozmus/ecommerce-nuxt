import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://gorest.co.in/public-api',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json'
  }
})

export default {
  getProducts() {
    return apiClient.get('/products')
  }
}
