<template>
  <div>
    <a class="footer" style="position: fixed; z-index: 2147483647; "><router-link to="/footer">Hakkımızda,Yardım ve Daha Fazlası</router-link><i class="fas fa-times"></i></a> <!--button z indeksinde yukarı ikonuyla-->

  </div>



</template>

<script>
  export default {
    name: 'footerbuton.vue'
  }
</script>

<style scoped>
  .footer{
    background: rosybrown;
    margin-top: 20px;
    font-size: 15px;
    position: relative;
    border-color: gray;
    width:20%;
    padding : 8px 15px 15px;
    cursor: pointer;
    border-radius: 3px;
    font-weight: 100;
    box-shadow: 0 0 5px #E2E2E2;
    float: left;
    bottom: 20px; /*aşağıdan 80px uzaklıkta*/
    height: 40px; /*buton yüksekliği*/
    text-align: center;/*ikonun butondaki konumu*/
  }
</style>
