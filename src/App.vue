<template>
  <div class="container">
    <HeaderComponent :blog="blog"/>
    <router-view />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

require('./assets/fonts/CartographCF/CartographCF-Light.woff')
require('./assets/fonts/CartographCF/CartographCF-Light.woff2')

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
  },
  data() {
    return { blog: false }
  }
}
</script>

<style>
@import './assets/main.css';

.container {
  margin: 0;
  width: 100%;
  height: 100%;
}

#app {
  font-family: CartographCF, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 0;
  text-align: center;
  color: black;
}
</style>
