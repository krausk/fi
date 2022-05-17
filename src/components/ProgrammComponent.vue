<template>
  <div class="pc-body">
    <div class="pc-list">
      <img src="../assets/img/programm_text.png" class="pc-txtimg" />
      <!-- <ul>
        <li>
          <ProgrammEntry 
          :startTime="'05 08 22 um 22:00 UTC+02'"
          :endTime="'06 08 22 um 08:00 UTC+02'"
          :headline="'l&l&l&family&friends'" 
          :text="'Clubnacht mit Laut und Luise\nund &&booking'"
          :lineup="'[main:]\nAtlantik *live\nFranca\nThor Rixon\n\n[second:]\nPhilipp Fein\nDetmold\nScrounger'"
          :image="'programm/enry1.png'"
          :imgWidth="200"
          />
        </li>
      </ul> -->
   </div>
   <div class="pc-cal">
      <img src="../assets/img/program_cal.png" class="pc-img" />
    </div>
  </div>
</template>

<script>
export default {
    name: "ProgrammComponent",
    components: {
    },
    props: {
        msg: String
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pc-body {
  display: flex;
  justify-content: space-between;
  align-items:flex-start;
  height: 100%;
  width: 100%;
}
.pc-list {
  position: relative;
  left: 0px;
  top: 0px;
  width: 50%;
  text-align: left;
}
.pc-cal {
  position: relative;
  right: 0px;
  top: 0px;
  text-align: right;
  width: 50%;
}
.pc-txtimg {
  width: 800px;
}
.pc-img {
  width: 600px;
}
ul {
  padding: 0;
  list-style-type: none;
}
li {
  padding: 0;
  width: 100%;
}
</style>
