<template>
  <div>
    <product-list />
  </div>
</template>

<script>
import ProductList from './product-list'
export default {
  components: { ProductList }
}
</script>

<style lang="scss">
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: white;
}

::-webkit-scrollbar-thumb {
  background: #e5e5e5;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #7a8a8a;
}
</style>
