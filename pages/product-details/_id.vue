<template>
  <div class="d-flex mt-5">
    <transition-group name="thumbnailfade" tag="div">
      <b-img
        :src="product.image"
        :key="product.id"
        style="cursor: pointer;"
        @click="showLightbox(product.image)"
      />
    </transition-group>
    <lightbox
      id="mylightbox"
      ref="lightbox"
      :images="images"
    ></lightbox>
    <div class="product-card d-flex">
      <div class="ml-3">
        <h2>{{ product.name }}</h2>
        <span class="font-weight-bold" style="color: #ea0;">{{ product.price }} $</span>
        <div
          class="my-3"
          style="max-width: 80%; text-align: justify;"
        >
          {{ product.description }}
        </div>
        <b-row class="my-1">
          <b-col class="d-flex">
            <b-button
              class="button-quantity mr-2"
              @click="productQuantity > 1 ? productQuantity-- : productQuantity = 1"
            >
              -
            </b-button>
            <b-form-input
              v-model="productQuantity"
              type="number"
              style="max-width: 65px;"
              min="1"
              max="99"
            >
            </b-form-input>
            <b-button
              class="button-quantity ml-2"
              @click="productQuantity++"
            >
              +
            </b-button>
          </b-col>
        </b-row>
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
          <b-button
            size="lg"
            class="button-add mt-3"
            :disabled="!maxNumber"
            @click="addToCart()"
          >
            ADD TO CARD
          </b-button>
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
      showDialog: false,
      images: [{ 'name': 'https://lorempixel.com/250/250' }]
    }
  },
  computed: {
    maxNumber() {
      return this.productQuantity >= 1 && this.productQuantity <= 99 ? true : false
    },
    ...mapGetters({
      products: 'getProducts'
    }),
    product() {
      this.productId = Number(this.$route.params.id)
      return this.products.find(el => el.id === this.productId)
    }
  },
   methods: {
    addToCart() {
      this.showDialog = true
      let item = this.product
      item = {
        ...item,
        productQuantity: Number(this.productQuantity)
      }
      this.$store.commit("ADD_TO_CART", { ...item })
    },
    goToCart() {
      this.$router.push({ path: '/cart' })
      this.showDialog = false
    },
    showLightbox (imageName) {
      this.$refs.lightbox.show(imageName)
    },
    ...mapActions(['fetchProducts'])
  },
  created() {
    this.fetchProducts()
  }
}
</script>
