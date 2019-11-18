<template>
  <div id="app">
    <Home message="HAKKIMIZDA" />
    <router-view></router-view>
    <br/><br/><hr/>
    <br/><br/><hr/>
    <br/><br/><hr/>
    <br/><br/><hr/>
    <scrollUp/>
    <footerbuton/>
  </div>
</template>

<script>
  import scrollUp from './components/scrollUp.vue'
  import Home from './components/Home.vue'
  import Footer from './components/Alt.vue'
  import footerbuton from './components/footerbuton'

  export default {
    name: 'app',
    components: {
      Home,
      scrollUp,
      Footer,
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
