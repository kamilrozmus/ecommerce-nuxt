<template>
  <div class="main">
    <div class="cart">
      <div v-if="cartCount > 0" class="counter">{{ cartCount }}</div>
      <nuxt-link exact to="/cart">
        <b-img src="~/assets/basket.svg" style="width: 70px;" />
      </nuxt-link>
    </div>
    <div>
      <Header />
      <Nuxt />
    </div>
  </div>
</template>
<script>
import Header from '~/components/Header.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    Header
  },
  computed: {
    ...mapGetters(['cartCount'])
  },
  methods: {
  }
}
</script>

<style lang="scss">
html {
  font-family:
    'Montserrat',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  line-height: 1.4;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button-add {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #ea0;
  background: #ea0;
  text-decoration: none;
  transition: all .3s;
  &:hover {
    background: #ea0;
  }
}

.button-quantity {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid black;
  background: black;
  text-decoration: none;
  &:hover {
    background: black;
  }
}

.main {
  width: 95vw;
  padding: 0;
}

.cart {
  display: flex;
  justify-content: flex-end;
}

.counter {
  border-radius: 50%;
  background: #ea0;
  font-size: 15px;
  height: 30px;
  padding: 5px 10px;
  font-weight: bold;
}

@media screen and (min-width: 900px) {
  .main {
    padding: 40px;
    margin: auto;
    width: 85vw;
  }
}
</style>
