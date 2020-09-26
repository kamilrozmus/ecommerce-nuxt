<template>
  <div>
    <div class="refresh-icon">
      <b-spinner
        v-if="loading"
        class="mt-1"
        style="width: 2rem; height: 2rem;"
      >
      </b-spinner>
      <b-icon
        icon="arrow-counterclockwise"
        font-scale="2.5"
        @click="reloadPage"
      >
      </b-icon>
    </div>
    <div v-for="item in products" :key="item.id">
      <div class="product-card -shadow d-flex">
        <b-img :src="item.image"></b-img>
        <div class="ml-3">
          <div class="head-line">
            <nuxt-link :to="`product-details/${item.id}`">
              <span>{{ item.name }}</span>
            </nuxt-link>
            <span class="font-weight-bold">{{ item.price }} $</span>
          </div>
          <div class="product-description">{{ item.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      loading: false
    }
  },
  computed: {
    ...mapGetters({
      products: 'getProducts'
    })
  },
  methods: {
    reloadPage() {
      this.loading = true
      this.fetchProducts()
      setTimeout(() => this.loading = false, 1000);
    },
    ...mapActions(['fetchProducts'])
  },
  created() {
    this.fetchProducts()
  }
}
</script>

<style lang="scss" scoped>

.refresh-icon {
  display:flex;
  justify-content: flex-end;
  margin-top: 10px;
  cursor: pointer;
}

.head-line {
  display: flex;
  justify-content: space-between;
}

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
