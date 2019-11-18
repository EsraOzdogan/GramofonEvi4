<template>
  <div class="home">
    <div class="wrapper">

      <div class="header-üst">
        <div class="menü-sol">
          <ul>
            <li class=" "><router-link to="/Hakkımızda">{{message}}</router-link></li>
            <li class=" "><router-link to="/İletişim">İLETİŞİM</router-link></li>
          </ul>
        </div>
        <div class="menü-sağ">
          <ul>
           <li><router-link to="/Giris">ÜYE GİRİŞİ</router-link></li>
            <li><router-link to="/firstRoute">YENİ ÜYE</router-link></li>
          </ul>
        </div>
      </div>
      <div class="header-orta">
        <div id="logo">

         <router-link to="/"><img src="../components/img/logo.png"></router-link>

        </div>
     

          <div class="arama-alanı">
          <form class="arama-kutusu" action="index.html" method="post">
            <input type="text" placeholder="Urunlerde ara..." name="" value="">
            <button type="button" name="button"><img src="../components/img/search.png" /></button>
          </form>
        </div>


        <div id="kart">
          <img src="../components/img/cart.png" alt="" />
          <a href="#">
            <span><router-link to="/Sepet">SEPETİM</router-link></span>
          </a>
        </div>
      </div>
      <div class="header-menu">
        <ul class="menu">
          <li>
             <router-link to="/PikapIgneleri">PIKAP IGNELERI</router-link>
          </li>
          <li class="dropdown">
            <a href="javascript:void(0)" class="dropbtn">YERLI PLAK</a>
            <div class="dropdown-içerik">
              <a href="#">
                YERLI 33'LUK PLAK
                <i class="fa fa-angle-right" style="font-size:8px;"> </i>
              </a>
              <a href="#">
                YERLI 45'LIK PLAK
                <i class="fa fa-angle-right" style="font-size:8px;"> </i>
              </a>
              <a href="#">
                YERLI TAŞPLAK
                <i class="fa fa-angle-right" style="font-size:8px;"> </i>
              </a>
              <a href="#">
                KARTPOSTAL PLAK
                <i class="fa fa-angle-right" style="font-size:8px;"> </i>
              </a>
            </div>
          </li>
          <li class="dropdown">
            <a class="dropbtn">YABANCI PLAK</a>
            <div class="dropdown-içerik">
              <a href="#">
                YABANCI 33'LUK PLAK
                <i class="fa fa-angle-right" style="font-size:8px;"> </i>
              </a>
              <a href="#">
                YABANCI 45'LIK PLAK
                <i class="fa fa-angle-right" style="font-size:8px;"> </i>
              </a>
              <a href="#">
                YABANCI TAŞPLAK
                <i class="fa fa-angle-right" style="font-size:8px;"> </i>
              </a>
              <a href="#">
                FONOGRAF KOVANI
                <i class="fa fa-angle-right" style="font-size:8px;"> </i>
              </a>
            </div>
          </li>
          <li class="dropdown">
            <a class="dropbtn">PIKAP-GRAMOFON-RADYO</a>
            <div class="dropdown-içerik">
              <a href="#">
                PIKAP
                <i class="fa fa-angle-right" style="font-size:8px;"> </i>
              </a>
              <a href="#">
                AMFI/HOPARLÖR
                <i class="fa fa-angle-right" style="font-size:8px;"> </i>
              </a>
              <a href="#">
                GRAMOFON/RADYO
                <i class="fa fa-angle-right" style="font-size:8px;"> </i>
              </a>

            </div>
          </li>
          <li>
            <a href="#">MEKANIK ANTIKA</a>
          </li>
          <li>
            <a href="#">OBJE KOLEKSIYONU</a>
          </li>
          <li>
            <a href="#">OYUNCAK</a>
          </li>
          <li>
            <a href="#">EFEMERA</a>
          </li>
        </ul>
      </div>
      <div class="mobile-menu-area visible-xs">
        <div class="container mean-container"><div class="mean-bar"><a href="#nav" class="meanmenu-reveal" ><span></span><span></span><span></span></a><nav class="mean-nav">
          <ul style="display: none;"><li class=" "><a class="" href="https://www.gramofonevi.com/pikap-ignesi-aks">PİKAP İĞNELERİ</a></li><li class=" "><a class="" href="#">YERLİ PLAK</a><ul class="sub-menu" style="display: none;"><li><a class="" href="https://www.gramofonevi.com/yerli-33luk-plak"><i class="fa fa-angle-right"></i>YERLİ 33'LÜK PLAK</a></li><li><a class="" href="https://www.gramofonevi.com/yerli-45lik-plak"><i class="fa fa-angle-right"></i>YERLİ 45'LİK PLAK</a></li><li><a class="" href="https://www.gramofonevi.com/yerli-tasplak"><i class="fa fa-angle-right"></i>YERLİ TAŞPLAK</a></li><li><a class="" href="#"><i class="fa fa-angle-right"></i>KARTPOSTAL PLAK</a></li></ul><a class="mean-expand" href="#" style="font-size: 18px">+</a></li><li class=" "><a class="" href="#">YABANCI PLAK</a><ul class="sub-menu" style="display: none;"><li><a class="" href="https://www.gramofonevi.com/yabanci-33luk-plak"><i class="fa fa-angle-right"></i>YABANCI 33'LÜK PLAK</a></li><li><a class="" href="https://www.gramofonevi.com/yabanci-45lik-plak"><i class="fa fa-angle-right"></i>YABANCI 45'LİK PLAK</a></li><li><a class="" href="https://www.gramofonevi.com/yabanci-tasplak"><i class="fa fa-angle-right"></i>YABANCI TAŞPLAK</a></li><li><a class="" href="https://www.gramofonevi.com/fonograf-kovani"><i class="fa fa-angle-right"></i>FONOGRAF KOVANI</a></li></ul><a class="mean-expand" href="#" style="font-size: 18px">+</a></li><li class=" "><a class="" href="#">PİKAP-GRAMOFON-RADYO</a><ul class="sub-menu" style="display: none;"><li><a class="" href="https://www.gramofonevi.com/pikap"><i class="fa fa-angle-right"></i>PİKAP</a></li><li><a class="" href="https://www.gramofonevi.com/amfi-hoparlor"><i class="fa fa-angle-right"></i>AMFİ/HOPARLÖR</a></li><li><a class="" href="https://www.gramofonevi.com/gramofon-radyo"><i class="fa fa-angle-right"></i>GRAMOFON/RADYO</a></li></ul><a class="mean-expand" href="#" style="font-size: 18px">+</a></li><li class=" "><a class="" href="https://www.gramofonevi.com/mekanik-antika">MEKANİK ANTİKA</a></li><li class=" "><a class="" href="https://www.gramofonevi.com/obje-koleksiyonu">OBJE KOLEKSİYONU</a></li><li class=" "><a class="" href="https://www.gramofonevi.com/oyuncak">OYUNCAK</a></li><li class="mean-last"><a class="" href="#">EFEMERA</a></li></ul>                        </nav></div>
          <div class="row">
            <div class="col-xs-12">
              <div class="mobile-menu">
                <div class="mean-push"></div><nav id="dropdown" style="display: none;">
                <ul><li class=" "><a class="" href="https://www.gramofonevi.com/pikap-ignesi-aks">PİKAP İĞNELERİ</a></li><li class=" "><a class="" href="#">YERLİ PLAK</a><ul class="sub-menu"><li><a class="" href="https://www.gramofonevi.com/yerli-33luk-plak"><i class="fa fa-angle-right"></i>YERLİ 33'LÜK PLAK</a></li><li><a class="" href="https://www.gramofonevi.com/yerli-45lik-plak"><i class="fa fa-angle-right"></i>YERLİ 45'LİK PLAK</a></li><li><a class="" href="https://www.gramofonevi.com/yerli-tasplak"><i class="fa fa-angle-right"></i>YERLİ TAŞPLAK</a></li><li><a class="" href="#"><i class="fa fa-angle-right"></i>KARTPOSTAL PLAK</a></li></ul></li><li class=" "><a class="" href="#">YABANCI PLAK</a><ul class="sub-menu"><li><a class="" href="https://www.gramofonevi.com/yabanci-33luk-plak"><i class="fa fa-angle-right"></i>YABANCI 33'LÜK PLAK</a></li><li><a class="" href="https://www.gramofonevi.com/yabanci-45lik-plak"><i class="fa fa-angle-right"></i>YABANCI 45'LİK PLAK</a></li><li><a class="" href="https://www.gramofonevi.com/yabanci-tasplak"><i class="fa fa-angle-right"></i>YABANCI TAŞPLAK</a></li><li><a class="" href="https://www.gramofonevi.com/fonograf-kovani"><i class="fa fa-angle-right"></i>FONOGRAF KOVANI</a></li></ul></li><li class=" "><a class="" href="#">PİKAP-GRAMOFON-RADYO</a><ul class="sub-menu"><li><a class="" href="https://www.gramofonevi.com/pikap"><i class="fa fa-angle-right"></i>PİKAP</a></li><li><a class="" href="https://www.gramofonevi.com/amfi-hoparlor"><i class="fa fa-angle-right"></i>AMFİ/HOPARLÖR</a></li><li><a class="" href="https://www.gramofonevi.com/gramofon-radyo"><i class="fa fa-angle-right"></i>GRAMOFON/RADYO</a></li></ul></li><li class=" "><a class="" href="https://www.gramofonevi.com/mekanik-antika">MEKANİK ANTİKA</a></li><li class=" "><a class="" href="https://www.gramofonevi.com/obje-koleksiyonu">OBJE KOLEKSİYONU</a></li><li class=" "><a class="" href="https://www.gramofonevi.com/oyuncak">OYUNCAK</a></li><li class=" "><a class="" href="#">EFEMERA</a></li></ul>                        </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    message: String
  }
}
</script>

<style scoped>
button {
    font-size: 1.25rem;
    border-radius: 3%;
    background-color: #f63954;
    border-color: #f63954;
    color: #fff;
    font-weight: 500;
}
  .wrapper{

    width: 1170px;
    margin: 0 auto;
    padding: 0 15px;
  }
  a{
    color: black;
    font-size: 12px;
    font-family: 'Century', serif;
    text-decoration: none;
    transition: all 150ms ease 0s;
  }
  ul{
    padding: 0;
    margin: 0
  }

  .header-üst{
    border-bottom: 2px dashed #6f6d6e;
    height: 59px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header-üst ul li a:hover {
    color: black;
    background-color: transparent;
    text-decoration: underline;
  }

  .header-üst ul li{
    float: left;
    list-style-type: none;
  }
  .header-üst ul li a{
    padding: 0 10px;
    border-right: 1px solid #ddd;
  }
  .header-üst ul li:last-child a {
    border-right: none;
  }

  .header-orta{
    border-top: 4px double #acabab;
    margin-top: 5px;
    padding-top: 20px;
    height: 104px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .arama-kutusu{
    background: #faf9f8 none repeat scroll 0 0;
    padding: 3px;
    position: relative;
  }

  .arama-kutusu button{
    position: absolute;
    right: 10px;
    top: 12px;
    border: 0;
    background: none;
    cursor: pointer;
  }
  .arama-kutusu img{
    width: 15px;
    opacity: .5;
  }
  .arama-kutusu input{
    width: 354px;
    height: 33px;
    padding: 0 10px;
    border: 1px solid #ddd;
  }
  .kart {
    display: flex;
    align-items: center;
  }
  .kart a{
    border-bottom: 4px double #ddd;
    border-top: 4px double #ddd;
    color: #070504;
    display: inline-block;
    padding: 10px 5px 10px 20px;
  }
  .header-menu{
    background: url("../components/img/menu.jpg") repeat;
    margin-top: 5px;
    padding: 5px;
  }
  .header-menu .menu {
    border: 1px solid #ddd;
  }
  .header-menu ul li{
    position: relative;
    display: inline-block;
    padding: 0px;
  }

  .header-menu ul li a {
    color: #333;
    display: block;
    font-family: 'Lora', sans-serif;
    letter-spacing: -1px;
    font-size: 14px;
    margin: 0 1px;
    padding: 8px 14px 7px;
    text-decoration: none;
    text-transform: uppercase;
    position: relative;
  }
  .header-menu ul li a:before {
    background: #ddd none repeat scroll 0 0;
    content: "";
    height: 21px;
    position: absolute;
    right: 0;
    top: 20%;
    width: 1px;
    z-index: 1;
  }
  .header-menu ul li a:hover{
    background: #413d3e;
    color:#fff;
  }
  li.dropdown {
    display: inline-block;
  }
  .dropdown-içerik {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }
  .dropdown-içerik a {
    background-color:white;
    color: black;
    padding: 35px 42px;
    font-family: 'Lora', sans-serif;
    text-decoration: none;
    display: block;
    text-align: left;
  }
  .dropdown-içerik a:hover {background:white;
    color:black;
    text-decoration: underline;}

  .dropdown:hover .dropdown-içerik {
    display: inline-block;
  }

  .dropdown-içerik a i {
    float: left;
    color:black;
    padding: 2px;

  }
  .container {
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
    width: 450px;
  }
  .mean-container .mean-bar {
    background: #88604B;
    z-index: 99;
    margin-top: 5px;
  }
  .mean-container .mean-bar {
    box-sizing: content-box;
  }
  .mean-container .mean-bar {
    float: left;
    min-height: 42px;
    padding: 4px 0 0;
    position: relative;
    width: 100%;
  }
  .mean-container a.meanmenu-reveal {
    width: 22px;
    height: 22px;
    padding: 13px 13px 11px;
    top: 0;
    cursor: pointer;
    color: #fff;
    text-decoration: none;
    text-indent: -9999em;
    line-height: 22px;
    font-size: 1px;
    display: block;
    font-family: Arial,Helvetica,sans-serif;
    font-weight: 700;
    float: right;
  }


  a {
    background-color: transparent;
  }
  .mean-container .mean-nav {
    float: left;
    width: 100%;
    background: #0c1923;
  }
  nav {
    display: block;
  }
  .mean-container .mean-nav ul {
    padding: 0;
    margin: 0;
    width: 100%;
    list-style-type: none;
  }
  ul {
    list-style: outside none none;
    /* margin-block-start: 1em;
   margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;*/
  }
  .mean-container .mean-nav ul li {
    background: #f8f8f8 none repeat scroll 0 0;
    float: left;
    position: relative;
    width: 100%;
    border-top: 1px solid#ddd;
  }
  .mean-container .mean-nav ul li a {
    background: #f8f8f8 none repeat scroll 0 0;
    color: #666666;
    display: block;
    float: left;
    font-size: 12px;
    margin: 0;
    padding: 1em 5%;
    text-align: left;
    text-decoration: none;
    text-transform: uppercase;
    width: 90%;
    font-weight: bold;
  }
  .mean-container .mean-nav ul li a {
    font-family: sans-serif;
  }
  .mobile-menu-area {
    background: none;
  }
  .overlay {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0, 0.9);
  overflow-x: hidden;
  transition: 0.5s;
}

.overlay-content {
  position: relative;
  top: 25%;
  width: 100%;
  text-align: center;
  margin-top: 30px;
}
.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
}
</style>

