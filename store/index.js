import productsService from '../service/productsService'
  export const state = () => ({
    products: [],
    cart: []
  }),
  getters = {
    getProducts: state => {
      return state.products
    },
    cartCount: state => {
      if (!state.cart.length) return 0
      return state.cart.reduce((ac, next) => ac + next.productQuantity, 0)
    }
  },
  mutations = {
    SET_PRODUCTS(state, items) {
      state.products = items
    },
    ADD_TO_CART (state, payload) {
      let item = state.cart.find(el => el.id === payload.id)
      if (item) {
        (item.productQuantity += payload.productQuantity)
      } else {
        state.cart.push(payload)
      }
    },
    REMOVE_FROM_CART: (state, payload) => {
      state.cart = state.cart.filter(el => el.id !== payload.id)
    }
  },
  actions = {
    async fetchProducts({ commit }) {
      await productsService.getProducts()
      .then(response => {
        commit('SET_PRODUCTS', response.data.data)
      })
      .catch(error => {
        console.log('Error has occured' + error)
      })
    }
  }
