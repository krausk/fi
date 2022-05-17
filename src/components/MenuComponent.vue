<template>
  <div class="menu">
    <ul>
      <li><a href="neu.html" rel="noopener" class="aselected">NEU</a></li>
      <li><a href="neu.html" rel="noopener">PROGRAMM</a></li>
      <li><a href="neu.html" rel="noopener">SHOP</a></li>
      <li><a href="neu.html" rel="noopener">ABOUT</a></li>
      <li><a href="neu.html" rel="noopener">KONTAKT</a></li>
      <li><a href="neu.html" rel="noopener"><img src="../assets/img/globe.png" class="symbol"></a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MenuComponent',
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
