<template>
  <div id="a" :style="cssProps">
    <table>
      <tbody>
        <tr>
          <td colspan="2">
            <h1>{{ startTime }}<br />
            {{ endTime }}<br /></h1>
            <h1>{{ headline }}</h1>
            <pre>{{ text }}</pre>
          </td>
        </tr>
        <tr>
          <td>
            <pre>{{ lineup }}</pre>
          </td>
          <td>
            <img :src="imgSrc" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ProgrammEntry',
  props: {
    startTime: String,
    endTime: String,
    headline: String,
    text: String,
    lineup: String,
    imgSrc: String,
    imgWidth: Number,
  },
   computed: {
    cssProps() {
      return {
        '--image-width': this.imgWidth + "px",
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
img {
  width: var(--image-width);
}
table {
  width: 100%;
}
td {
  padding: 0;
  margin: 0;  
  color: black;
  text-align: left;
  vertical-align: top;
}
h1 {
  font-size: 24px;
}
pre {
  font-size: 28px;
}


</style>
