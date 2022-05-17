<template>
  <div class="mce">
    {{ date }} {{ title }}
  </div>
</template>

<script>
export default {
  name: 'HeaderCalendarEntry',
  props: {
    date: String,
    title: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mce {
}
</style>
