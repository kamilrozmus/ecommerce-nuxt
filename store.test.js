import { state } from './store'
import { getProducts } from './service/productsService'

test('Get API', async () => {
  const response = await getProducts
  expect(response).toBe(state.products)
})
