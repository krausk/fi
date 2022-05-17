<template>
  <div id="a" :style="cssProps">
    <table>
      <tbody>
        <tr>
          <td>
            <img :src="image" />
          </td>
          <td>
            <pre>{{ msg }}</pre>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'BodyComponent',
  props: {
    index: Number,
    msg: String,
    image: String,
    imgWidth: Number,
  },
   computed: {
    cssProps() {
      return {
        '--image-width': this.imgWidth + "px",
        '--flow-direction': (this.index % 2 == 0) ? 'row' : 'row-reverse',
        '--vertical-alignment': (this.index % 2 == 0) ? 'top' : 'bottom',
        '--text-align': (this.index % 2 == 0) ? 'left' : 'right',
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
tr {
  display: flex; 
  flex-flow: var(--flow-direction);
}
td {
  display: flex; 
  padding: 0;
  margin: 0;  
  color: black;
  align-items: center; 
}
pre {
  padding: 0;
  margin: 0;
  text-align: var(--text-align);
  font-size: 24px;
}

</style>
