import productsService from "../service/productsService"
  export const state = () => ({
    products: []
  }),
  getters = {
    getProducts: state => {
      return state.products
    }
  },
  mutations = {
    SET_PRODUCTS(state, items) {
      state.products = items
    }
  },
  actions = {
    async fetchProducts({ commit }) {
      await productsService.getProducts()
      .then(response => {
        commit('SET_PRODUCTS', response.data.data)
      })
      .catch(error => {
        console.log("Error has occured" + error)
      })
    },
    async deleteProduct({ dispatch }, payload) {
      await productsService.deleteProduct(payload)
      dispatch('fetchProducts')
    }
  }
