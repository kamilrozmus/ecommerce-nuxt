<template>
  <div>
    <h2 v-if="cart.length === 0" class="text-center mt-3">Your shopping cart is empty</h2>
    <h2 v-if="cart.length !== 0" class="text-center mt-3">Your shopping cart</h2>
      <div
        v-for="item in cart"
        :key="item.id"
        class="items-in-cart"
      >
        <b-img
          :src="item.image"
          style="width: 150px"
        >
        </b-img>
        <span class="subheading font-weight-bold">{{ item.name }}</span>
        <span>Quantity: {{ item.productQuantity }}</span>
        <span class="font-weight-bold">{{ item.price }} $</span>
        <b-button
          variant="danger"
          @click="confirmDialog = true"
        >
          Remove
        </b-button>
        <b-modal
          v-model="confirmDialog"
          title="Remove an item!"
        >
          <div class="d-flex mt-2">
            <div>Do you want to remove
              <span class="font-weight-bold">{{ item.name }}</span>
              from the cart?
            </div>
          </div>
            <template v-slot:modal-footer>
              <b-button
                size="sm"
                variant="outline-secondary"
                @click="confirmDialog = false"
              >
                No
              </b-button>
              <b-button
                size="sm"
                variant="success"
                @click="removeFromCart(item)"
              >
                Yes
              </b-button>
            </template>
        </b-modal>
      </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      confirmDialog: false
    }
  },
  computed: {
    ...mapState(['cart'])
  },
  methods: {
    removeFromCart(item) {
      this.$store.commit('REMOVE_FROM_CART', item)
      this.confirmDialog = false
    }
  }
}
</script>
<style lang="scss" scoped>
.items-in-cart {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}
</style>
