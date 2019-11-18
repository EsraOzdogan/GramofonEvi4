<template>
  <div class="wrapper">


    <div class="slider1">
      <img src="../components/img/img1.jpeg" alt="">
    </div>

    <div class="tablo">
      <div class="tablo-kutu">
        <h2 class="tablo-başlık">GUVENLI ALISVERIS</h2>
        <span class="tablo-başlık-br"></span>
        <p>
          <img src="../components/img/img7.jpg">
        </p>
      </div>
      <div class="tablo-kutu">
        <h2 class="tablo-başlık">EN IYI 10</h2>
        <span class="tablo-başlık-br"></span>
        <p>
          <img src="../components/img/img8.jpg">
        </p>
      </div>
      <div class="tablo-kutu">
        <h2 class="tablo-başlık">ILETISIM</h2>
        <span class="tablo-başlık-br"></span>
        <p>
          <img src="../components/img/img9.jpg">
        </p>
      </div>
    </div>

    <div class="ürün">
      <div class="title">
        <h2>Yeni Eklenen Urunler</h2>
      </div>
      <div class="carousel">

        <div id="myCarousel" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
            <li data-target="#myCarousel" data-slide-to="3" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="4"></li>

          </ol>


          <div class="carousel-inner">

            <div class="item active">
              <img src="../components/img/img2.png" alt="BOĞA FERDINAND - CAN GÜÇKAN & YETKİN DİKİNCİLER-MAXI SINGLE" style="width:100%;">
              <div class="carousel-caption">
                <a href="#">BOĞA FERDINAND - CAN GÜÇKAN & YETKİN DİKİNCİLER-MAXI SINGLE</a>
                <p>120TL</p>
              </div>
            </div>

            <div class="item">
              <img src="../components/img/img3.jpg" alt="AYTEN ALPMAN - Türk Pop Tarihi / Eski 45'likler (PLAK" style="width:100%;">
              <div class="carousel-caption">
                <a href="#">AYTEN ALPMAN - Türk Pop Tarihi / Eski 45'likler (PLAK</a>
                <p>120TL</p>
              </div>
            </div>

            <div class="item">
              <img src="../components/img/img4.jpg" alt="FAZIL SAY - NAZIM ORATORYOSU - 2 PLAK" style="width:100%;">
              <div class="carousel-caption">
                <a href="#">FAZIL SAY - NAZIM ORATORYOSU - 2 PLAK</a>
                <p>135TL</p>
              </div>
            </div>
            <div class="item">
              <img src="../components/img/img10.jpg" alt="BELKIS ÖZENER - YEŞİLÇAM ŞARKILARI  - 2 LP" style="width:100%;">
              <div class="carousel-caption">
                <a href="#">BELKIS ÖZENER - YEŞİLÇAM ŞARKILARI  - 2 LP</a>
                <p>150TL</p>
              </div>
            </div>
            <div class="item">
              <img src="../components/img/img6.jpg" alt="BİRSEN TEZER - CİHAN" style="width:100%;">
              <div class="carousel-caption">
                <a href="#">BİRSEN TEZER - CİHAN</a>
                <p>120TL</p>
              </div>
            </div>

          </div>

          <a class="left carousel-control" href="#myCarousel" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="right carousel-control" href="#myCarousel" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>

    <div class="sticky">
      <div class="footer-üst">
        <div class="footer-container">
          <div class="footer-row">
            <div class="grid">
              <div class="footer-iç">
                <p>
                </p><p>2003 YILININ HAZİRAN AYINDA 8 M2 ALANDA BAŞLADIĞIMIZ İŞİMİZ BİZİ ZAMANLA GÜZEL BİR SERÜVENE SÜRÜKLEDİ. KÜÇÜK DÜKKANIMIZDA HAREKET EDECEK YER YOKKEN ...<a href="http://www.gramofonevi.com/hakkimizda">(Devamı)</a></p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="footer-orta">
        <div class="footer-container">
          <div class="footer-row">
            <div class="grid">
              <h2 class="grid-başlık"><span>Hakkımızda</span></h2>
              <div class="grid-kutu">
                <span>
                <a class="" href="#">Hakkımızda</a>
                <a class="" href="#">İletişim</a></span>
              </div>
            </div>

            <div class="grid">
              <h2 class="grid-başlık"><span>Yardım</span></h2>
              <div class="grid-kutu">
                <span><a class="" href="#">Güvenli Alışveriş</a>
                <router-link to="/sss">SSS</router-link><a class="" href="hesap-numaralari">Hesap Numaraları</a></span>
              </div>
            </div>

            <div class="grid">
              <h2 class="grid-başlık"><span>Üyelik</span></h2>
              <div class="grid-kutu">
                <span><a class="" href="#i">Üyelik Sözleşmesi</a><a class="" href="kayit">Üye Kayıt</a><a class="" href="giris">Üye Girişi</a></span>
              </div>
            </div>

            <div class="grid">
              <h2 class="grid-başlık"><span>Sipariş</span></h2>
              <div class="grid-kutu">
                <span><a class="" href="#">Gizlilik Taahhütü</a><a class="" href="#">Satış Sözleşmesi</a><a class="" href="#">Teslimat Koşulları</a></span>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div class="footer-alt">
        <div class="footer-container">
          <div class="footer-alt-iç">
            <div class="footer-alt-row">
              <div class="grid">
                <div class="footer-kutu">
                  <h3>TAKİP EDİN</h3>
                  <div class="footer-sosyal-ikon">
                    <a href="#" target="_blank">
                      <i class="fa fa-facebook-f"></i>
                    </a>
                    <a href="#" target="_blank">
                      <i class="fa fa-twitter"></i>
                    </a>
                    <a href="#" target="_blank">
                      <i class="fa fa-instagram"></i>
                    </a>
                    <a href="#" target="_blank">
                      <i class="fa fa-google-plus"></i>
                    </a>
                  </div>
                </div>

              </div>
            </div>
            <div class="footer-alt-row">
              <div class="grid">
                <div class="footer-yazı">
                  <p>
                    <a class="rhonshop-copyright" href="#" target="_blank" title="Rhonshop E-ticaret Yazılımı" rel="nofollow">
                      <span>Rhonshop</span> e-ticaret yazılımı ile hazırlanmıştır.
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <buton class="geri"><a><router-link to="/">Kapat</router-link></a></buton>
            </div>

          </div>
        </div>
      </div>
    </div>







  </div>


</template>

<script>
  export default {
    name: 'fixedFooter.vue'
  }
</script>

<style scoped>
  div.sticky {
    position: fixed;
    margin-top: 1500px;
    background: url("/img/general_bg_image.png") ;
    bottom: 0px;
    margin-right: 125px;
    z-index: 2 !important;
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
   /*margin-block-start: 1em;
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
  .slider1{
    margin-top: 25px;
    margin-bottom: 25px;
  }
  .slider1 img{
    width: 100%;
  }
  .tablo{
    display: flex;
    justify-content: space-between;
  }
  .tablo-kutu {
    background: #fff;
    text-align: center;
    position: relative;
    padding: 20px;
    margin-top: 30px;
    z-index: 1;
    width: 330px;
  }
  .tablo-kutu img{
    width: 100%;
  }
  .span.tablo-başlık-br {
    border-top: 4px double #ddd;
    height: 4px;
    margin: 0 auto;
    max-width: 200px;
    display: block;
  }
  .tablo-kutu:before{
    position: absolute;
    top: 3px;
    left: 3px;
    right: 3px;
    bottom: 3px;
    border: 1px solid #ddd;
    content: "";
  }
  .ürün .title{
    background: url("../components/img/bg-title.png") no-repeat scroll center center;
    height: 65px;
    margin: 40px 0;
    text-align: center;
  }
  .ürün .title h2{
    color: #333;
    font-size: 16px;
    font-weight: normal;
    line-height: 55px;
    padding: 0;
    text-transform: uppercase;
  }
  .carousel-caption a{ color:white;}
  .carousel-caption p{ color: #88604B;
    font-size: medium;
  }
  .footer-üst {
    margin: 30px 0;
  }
  .footer-container{
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
  }
  .footer-row{
    margin-left: -15px;
    margin-right: -15px;
    display: flex;
    text-align: center;
    justify-content: space-between;
  }
  .grid{
    position: relative;
    min-height: 1px;
    padding-left: 15px;
    padding-right: 15px;
  }
  .footer-iç{
    background: #fff;
    position:relative;
    padding:40px 100px;
    z-index:1;
  }
  .footer-iç:before {
    border:1px solid #ddd;
    position:absolute;
    top:10px;
    left:10px;
    right:10px;
    bottom:10px;
    content:"";
    z-index:-1;
  }
  .footer-iç p {
    color: #413d3e;
    font-size: 16px;
    margin: 0;
    text-align: center;
    text-transform: uppercase;
  }
  .footer-iç p a {
    color:#568e4f;
  }
  .footer-iç p a:hover {
    color:#333;
  }
  .footer-orta {
    margin-top:40px;
  }
  .footer-orta h2.grid-başlık:before {
    border-top: 4px double #ddd;
    content: "";
    left: 0;
    margin-top: -2px;
    position: absolute;
    top: 50%;
    width: 100%;
  }
  .footer-orta h2.grid-başlık{
    color: #2d2d2d;
    font-size: 25px;
    font-weight: normal;
    margin: 0 auto;
    padding: 0;
    position: relative;
    text-align: center;
    text-transform: uppercase;
  }
  .footer-orta h2.grid-başlık span {
    background: rgba(0, 0, 0, 0) url("../components/img/general_bg_image.png") repeat scroll 0 0;
    margin: 0;
    padding: 0 15px;
    position: relative;
    z-index: 11;
  }
  .grid-kutu{
    background: #fff;
    text-align: center;
    position: relative;
    padding: 20px;
    margin-top: 30px;
    z-index: 1;
  }
  .footer-orta .grid-kutu a {
    font-family:"century";
    color: #333;
    display: block;
    font-size: 12px;
    line-height: 26px;
    padding: 0 16px;
    text-align: center;
    text-transform: uppercase;
  }
  .footer-alt-iç {
    border-top: 4px double #acabab;
    float: left;
    margin: 50px 0 0;
    padding-top: 20px;
    position: relative;
    text-align: center;
    width: 100%;
  }
  .footer-alt-iç:before {
    border-top: 2px dashed #6f6d6e;
    content: "";
    left: 0;
    position: absolute;
    top: -10px;
    width: 100%;
  }
  .footer-kutu h3 {
    font-size: 30px;
    font-weight: normal;
    margin: 0 0 10px;
    font-family: 'Lora', sans-serif;
    font-size: 20px;
    letter-spacing: 1px;
  }
  .footer-alt-row{
    margin-left: -15px;
    margin-right: -15px;
  }
  .footer-sosyal-ikon a {
    border: 1px solid #333;
    color: #333;
    display: inline-block;
    font-size: 24px;
    height: 40px;
    line-height: 40px;
    margin: 0 10px 0 0;
    width: 45px;
    text-align:center;
  }
  .footer-sosyal-ikon a:hover {
    color:#88604B;
    border-color:#88604B;
  }
  .footer-yazı {
    color: #333;
    font-size: 13px;
    padding: 20px 0;
    text-align: center;
  }
  .geri{
    background: rosybrown;
    margin-top: 20px;
    font-size: 15px;
    position: relative;
    border-color: gray;
    padding : 8px 15px 15px;
    cursor: pointer;
    border-radius: 3px;
    font-weight: 100;
    box-shadow: 0 0 5px #E2E2E2;
    bottom: 20px; /*aşağıdan 80px uzaklıkta*/
    height: 40px; /*buton yüksekliği*/
    text-align: center;/*ikonun butondaki konumu*/
  }
</style>
