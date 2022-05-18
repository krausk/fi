<template>
  <div class="container">
    <HeaderComponent :blog="blog"/>
    <BodyComponent  v-if="blog"/>
    <ProgrammComponent v-else/>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import BodyComponent from './components/BlogComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import ProgrammComponent from './components/ProgrammComponent.vue'

require('./assets/fonts/CartographCF/CartographCF-Light.woff')
require('./assets/fonts/CartographCF/CartographCF-Light.woff2')

export default {
  name: 'App',
  components: {
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    ProgrammComponent
  },
  data() {
    return { blog: false }
  },
  created() {
    let urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('programm')) {
      this.blog = false
    } else {
      this.blog = true
    }
  },
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
