<template>
  <div class="hello">
    <div class="wrapper">
      <div class="sepet-container">
        <div class="sepet-row">
          <h2>Sepet boş</h2>

        </div>

      </div>
    </div>

  </div>


</template>

<script>
  export default {
    name: 'SecondRouteChild'
  }
</script>

<style scoped>
  .wrapper {
    width: 1170px;
    margin: 0 auto;
    padding: 0 15px;
  }
  .sepet-container {
    background-color: white; /*üye kaydınıın arkasının arka zemininin rengi*/
    min-height: 450px;
    padding-top: 25px;
    padding-left: 20px;
  }
</style>
