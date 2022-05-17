<template>
  <div class="header">
    <HeaderVideo class="hc-video" />
    <img src="../assets/img/logo.png" class="hc-logo" />
    <MenuComponent :blog="blog" class="hc-menu" />
    <HeaderCalendar v-if="blog" class="hc-calendar" />
  </div>
</template>

<script>
import MenuComponent from './MenuComponent.vue';
import HeaderVideo from './HeaderVideo.vue';
import HeaderCalendar from './HeaderCalendar.vue';

export default {
  name: 'HeaderComponent',
  components: {
    MenuComponent,
    HeaderVideo,
    HeaderCalendar
  },
  props: {
    blog: Boolean
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  position: relative;
  min-height: 400px;
  margin: 0;
}
.hc-logo {
  position: absolute;
  width: 200px;
  top: 30px;
  left: 30px;
}
.hc-menu {
  position: absolute;
  width: 100%;
  bottom: 0px;
  left: 0px;
}
.hc-video {
  position: solid;
  width: 100%;
  bottom: 0px;
  left: 0px;
}
.hc-calendar {
  position: absolute;
  width: 50%;
  min-width: 400px;
  bottom: 52px;
  right: 0px;
}
p {
  margin: 0;
  padding: 0;
  border: 0;
}
</style>
