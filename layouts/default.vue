<template>
  <div class="main">
    <div>
      <Header />
      <Nuxt />
    </div>
  </div>
</template>
<script>
import Header from "~/components/Header.vue";

export default {
  components: {
    Header
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

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
  transition: all .3s;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.main {
  width: 95vw;
  padding: 0;
  margin-left: 2vw;
}

@media screen and (min-width: 900px) {
  .main {
    padding: 40px;
    margin-left: 8vw;
    width: 90vw;
  }
}
</style>
