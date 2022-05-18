<template>
  <div class="menu">
    <ul>
      <li>
        <a v-if="blog" href="/" rel="noopener" class="aselected">NEU</a>
        <a v-else href="/" rel="noopener">NEU</a>
      </li>
      <li>
        <a v-if="blog" href="?programm" rel="noopener">PROGRAMM</a>
        <a v-else href="?programm" rel="noopener" class="aselected">PROGRAMM</a>
      </li>
      <li><a href="#" rel="noopener">SHOP</a></li>
      <li><a href="#" rel="noopener">ABOUT</a></li>
      <li><a href="#" rel="noopener">KONTAKT</a></li>
      <li><a href="#" rel="noopener"><img src="../assets/img/globe.png" class="symbol"></a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MenuComponent',
  props: {
    blog: Boolean
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu {
  padding-top: 7px;
  padding-bottom: 7px;
  background-color: rgba(10, 38, 25, 0.8);
}
ul {
  width: 100%;
  list-style-type: none;
  padding: 0;
  margin: 0;
}
li {
  display: inline-block;
  text-align: justify;
  margin: 0 5%;
}
a {
  color: #a48a7b;
  text-decoration: solid;
  font-size: 28px;
}
.symbol {
  position: relative;
  bottom: -6px;
  height: 28px;
}
.aselected {
  color: #cbbba0;
  text-decoration: solid;
  font-size: 28px;
}
</style>
