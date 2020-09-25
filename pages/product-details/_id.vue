<template>
  <div class="d-flex mt-5">
    <div v-if="product.image">
      <b-img :src="product.image"></b-img>
    </div>
    <div class="product-card d-flex">
      <div class="ml-3">
        <h2>{{ product.name }}</h2>
        <span style="color: #ea0;">{{ product.price }}</span>
        <div class="product-description">{{ product.description }}</div>
        <b-button class="button-quantity" @click="productQuantity > 1 ? productQuantity-- : productQuantity = 1">-</b-button>
        <input type="number" v-model="productQuantity" />
        <b-button class="button-quantity" @click="productQuantity++">+</b-button>
        <div>
          <b-modal v-model="showDialog" title="You have added the item to the cart!">
            <div class="d-flex mt-2">
              <div v-if="product.image">
                <b-img :src="product.image" style="width: 70px;"></b-img>
              </div>
              <div class="ml-3">
                <div>{{ product.name }} x {{ productQuantity }}</div>
                <span style="color: #ea0;">{{ product.price }}$</span>
              </div>
            </div>
            <template v-slot:modal-footer>
              <b-button size="sm" variant="outline-secondary" @click="showDialog = false">
                Continue shopping
              </b-button>
              <b-button size="sm" variant="success" @click="goToCart()">
                Go to cart
              </b-button>
            </template>
          </b-modal>
        </div>
        <div class="mt-3">
          <b-button size="lg" class="button-add" @click="addToCart()">ADD TO CARD</b-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      productId: null,
      productQuantity: 1,
      showDialog: false
    }
  },
  computed: {
    ...mapGetters({
      products: 'getProducts'
    }),
    product() {
      this.productId = Number(this.$route.params.id)
      return this.products.find(el => el.id === this.productId);
    }
  },
   methods: {
    addToCart() {
      this.showDialog = true
      let item = this.product
      item = {
        ...item,
        productQuantity: this.productQuantity
      }
      this.$store.commit("ADD_TO_CART", {...item} )
    },
    goToCart() {
      this.$router.push({ path: '/cart' })
      this.showDialog = false
    },
    ...mapActions(['fetchProducts'])
  },
  created() {
    this.fetchProducts()
  }
}
</script>
