<template>
  <div class="mc">
    <div>August 2022<br />&nbsp;</div>
    <ul>
      <li><HeaderCalendarEntry date="Fr 05 08" title="l&l&l&family&friends"/></li>
      <li><HeaderCalendarEntry date="Sa 06 08" title="4ever all night long"/></li>
      <li>&nbsp;</li>
      <li><HeaderCalendarEntry date="Fr 12 08" title="open air unten sie"/></li>
      <li><HeaderCalendarEntry date="Sa 13 08" title="Frauengedeck"/></li>
      <li>&nbsp;</li>
      <li><HeaderCalendarEntry date="Fr 19 08" title="[fi:] in Koncert w/ C.A.R."/></li>
      <li><HeaderCalendarEntry date="Sa 20 08" title="Martha Van Straaten takes over"/></li>
      <li>&nbsp;</li>
      <li><HeaderCalendarEntry date="Fr 26 08" title="eis zweig dreist [fi:]"/></li>
      <li><HeaderCalendarEntry date="Sa 27 08" title="I never talk to mirrors w/ Kerala Dust"/></li>
    </ul>
  </div>
</template>

<script>
import HeaderCalendarEntry from './HeaderCalendarEntry.vue';

export default {
  name: 'MenuCalendar',
  components: {
    HeaderCalendarEntry,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mc {
  background-color: rgba(164, 138, 123, 0.50);
  text-align: left;
  color: #ff0000;
  font-size: 20px;
  padding-bottom: 50px;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
li {
  display: inline-block;
  margin: 0;
  width: 100%;
}
</style>
