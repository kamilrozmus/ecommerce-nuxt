<template>
  <div>
    <div v-for="item in products" :key="item.id">
      <div class="product-card -shadow d-flex">
        <b-img :src="item.image"></b-img>
        <div class="ml-3">
          <nuxt-link :to="`product-details/${item.id}`">
            <span>{{ item.name }}</span>
          </nuxt-link>
          <div class="product-description">{{ item.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      products: 'getProducts'
    })
  },
  methods: {
    ...mapActions(['fetchProducts'])
  },
  created() {
    this.fetchProducts()
  }
}
</script>

<style lang="scss" scoped>
.product-card {
  padding: 25px;
  transition: all 0.3s linear;
  margin-bottom: 25px;
  margin-top: 25px;
  &:hover {
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
  }
}

.product-description {
  margin-top: 45px;
  max-width: 70%;
  text-align: justify;
}

.product-link {
  color: black;
  font-weight: 90;
  text-decoration: none;
}
</style>
