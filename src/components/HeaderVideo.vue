<template>
  <div class="hv">
    <video loop="true" preload="auto" autoplay="true" width="1280" class="hv-video">
        <source src="../assets/vid/header_video.mp4" type="video/mp4">
    </video>
  </div>
</template>

<script>
export default {
  name: 'HeaderVideo',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hv {
  margin: 0;
  max-height: 1000px;
  overflow: hidden;
}
.hv-video {
  width: 100%;
  min-width: 700px;
  vertical-align: bottom;
}
</style>
