<template>
  <div class="fc-full">
    <div class="fc-newsletter">
      Bleibe im Kontakt.<br />
      Abonniere <a href="neu.html">[hier:]</a> unseren<br />
      Newsletter.
    </div>
    <div class="fc-links">
      <div class="fc-impressum">
        &copy; 2022 [fi:]<br/>
        <a href="neu.html">impressum</a> | <a href="neu.html">datenschutz</a> | <a href="neu.html">wiederrufsbelehrung</a>
      </div>
      <div class="fc-social">
        <a href="neu.html"><img src="../assets/img/soundcloud.png"></a> <a href="neu.html"><img src="../assets/img/insta.png"></a> <a href="neu.html"><img src="../assets/img/facebook.png"></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterComponent',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fc-full {
  padding-top: 7px;
  padding-bottom: 7px;
}
.fc-newsletter {
  font-size: 28px;
}
.fc-links {
  width: 100%;
  text-align: center;
}
.fc-impressum {
  position: absolute;
  left: 0;
  text-align: left;
  font-size: 20px;
}
.fc-social {
  text-align: center;
  font-size: 18px;
}
a {
  text-decoration: solid;
  color: black;
}
img {
  height: 45px;
  padding-right: 15px;
}
</style>
