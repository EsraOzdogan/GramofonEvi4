<template>
  <div id="app">
    <Home message="HAKKIMIZDA"/>
    <router-view></router-view>
    <br/><br/><hr/>
    <br/><br/><hr/>
    <br/><br/><hr/>
    <br/><br/><hr/>
    <br/><br/><hr/>
    <br/><br/><hr/>
    <br/><br/><hr/>
    <br/><br/><hr/>
    <br/><br/><hr/>

    <footerbuton/>
    <scrollUp/>
  </div>
</template>

<script>
  import Home from './components/Home.vue'
  import scrollUp from './components/scrollUp.vue'
  import footerbuton from './components/footerbuton.vue'
  import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

  export default {
    name: 'app',
    components: {
      Home,
      scrollUp,
      footerbuton
    }
  }
</script>

<style>
 #app {
    background: url("components/img/general_bg_image.png") repeat;
    margin: 0;
    color: #333;
    font-size: 12px;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  }
</style>
