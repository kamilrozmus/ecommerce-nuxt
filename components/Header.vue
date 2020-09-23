<template>
  <header>
    <h1>E-commerce</h1>
    <nav>
      <ul>
        <li>
          <nuxt-link exact to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/cart">Cart</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    reloadPage() {
      window.location.reload()
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  padding: 45px 45px 0;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

h1 {
  font-family:"Oswald Bold", bold, sans-serif
}

nav {
  display: flex;
  width: 80vw;
  padding: 8px 0;
  justify-content: center;
  margin-top: 30px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  ul {
    padding-left: 0;
    li {
      text-transform: uppercase;
      display: inline;
      font-size: 13px;
      padding: 0 20px;
      border-left: 1px solid #dde;
      border-right: 1px solid #dde;
      position: relative;
      cursor: pointer;
      a {
        color: black;
      }
    }
  }
}
</style>
