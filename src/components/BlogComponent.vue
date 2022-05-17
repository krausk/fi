<template>
  <div class="mc-body">
    <ul>
      <li>
        <MessageComponent 
        :index="0"
        :msg="'Neu\nNewsfeed\nVer&ouml;ffentlichungen\nNeue Veranstaltungsreihen Features\nund Specialevents'" 
        :image="'blog/blog1.gif'"
        :imgWidth="300"
        />
      </li>
      <li>
        <MessageComponent 
        :index="1"
        :msg="'Newsfeed\nVer&ouml;ffentlichungen\nNeue Veranstaltungsreihen Features\nund Specialevents'" 
        :image="'blog/blog2.gif'"
        :imgWidth="600"
        />
      </li>
      <li>
        <MessageComponent 
        :index="2"
        :msg="'Feature im August\n27 08 2022 AFAR*live'" 
        :image="'blog/blog3.png'"
        :imgWidth="500"
        />
      </li>
      <li>
        <MessageComponent 
        :index="3"
        :msg="'Newest [fi:] records Release\nFIR 032\nJa Kobus Klaub - Tangram'" 
        :image="'blog/blog4.png'"
        :imgWidth="400"
        />
      </li>
        <li>
        <MessageComponent 
        :index="4"
        :msg="'>> Back in Stock <<\n\n Swater\n[fi:] Twisted\nGr&ouml;&szlig;en S - XL\n100% Baumwolle'" 
        :image="'blog/blog5.png'"
        :imgWidth="800"
        />
      </li>
      <li>
        <MessageComponent 
        :index="5"
        :msg="'Im Juli freuen wir uns auf Ida Daugard.\nWir haben sie vorab f&uuml;r\n euch interviewt.'" 
        :image="'blog/blog6.png'"
        :imgWidth="300"
        />
      </li>
      <li>
        <MessageComponent 
        :index="6"
        :msg="'Hier steht noch ein anderer\nVeranstaltungstext zu einem\nvergangenen Event im Juli'" 
        :image="'blog/blog7.gif'"
        :imgWidth="400"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import MessageComponent from './MessageComponent.vue';

export default {
    name: "BlogComponent",
    components: {
      MessageComponent,
    },
    props: {
        msg: String
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mc-body {
  color: #42b983;
  height: 100%;
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
