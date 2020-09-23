<template>
  <div>
    <div class="product-card -shadow d-flex mt-5">
      <b-img :src="product.image"></b-img>
      <div class="ml-3">
          <h2>{{ product.name }}</h2>
          <span style="color: #ea0;">{{ product.price }}</span>
        <div class="product-description">{{ product.description }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      productId: null
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
    ...mapActions(['fetchProducts'])
  },
  created() {
    this.fetchProducts()
  }
}
</script>
