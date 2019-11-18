<template>
  <div class="hello">
    <div class="geridönüs">  <!--anasayfa ve pikapiğnesi sayfasına gidiş-->
      <div class="container">
        <div  class="geridönüs-ic">
          <a><a><router-link to="/">Ana Sayfa</router-link></a>  <!--anasayfaya gidiş-->
          </a><span> &nbsp; &gt; &nbsp; </span><a><a><router-link to="/PikapIgneleri">PİKAP İĞNESİ -AKS</router-link></a></a>	  <!--eski sayfalara dönüş linkleri-->  <!--pikapiğnesi sayfasına gidiş-->
        </div>
      </div>
    </div>
    <div class="ürünsayfasi">
      <div class="container">
        <div class="page-product-thumb">
          <div class="carousel"   >

            <div id="myCarousel" class="carousel slide" data-ride="carousel" >



              <div class="carousel-inner" >

                <div class="item active" >
                  <img src="../components/img/imgf.jpg"  >
                </div>

                <div class="item">
                  <img src="../components/img/img12.jpg" >
                </div>

              </div>


            </div>
          </div>



          <div class="owl-controls clickable">
            <div class="owl-pagination">
              <div class="owl-page active">
                <a href="#myCarousel" data-slide="prev">
                  <span class=""></span>
                </a>
              </div>
              <div class="owl-page">
                <a  href="#myCarousel" data-slide="next">
                  <span class=""></span>
                </a>
              </div>
            </div>
          </div>


        </div>





        <div class="ürünaciklama"> <!-- ürün açıklama üstteki-->
          <h1 class="ürünbaslik">SANSUI SN-80 PİKAP İĞNESİ VE KRİSTALİ </h1>
          <span class="ürünfiyat">
							    400 TL						</span>
          <a class="buton"><a v-on:click="say('Sepete Eklendi')"><router-link to="/butonsepet">SEPETE EKLE</router-link></a></a>
        </div>

        <div class="ürünaciklama-grid">   <!-- ürün açıklama alttaki-->
          <ul class="aciklama-row">
            <li class="aciklama"><a  >Açıklama</a></li>
          </ul>
          <div class="aciklama-grid">     <!-- ürün ile ilgili yazılar-->
            <div class="ürünaciklama-ic">
              <p><em><strong>SANSUI PİKAP İĞNESİ VE KRİSTALİ</strong></em></p>

              <p><em><strong>MODEL; SN-80</strong></em></p>

              <p>&nbsp;</p>

              <p><strong>"GEÇMİŞİN EZGİLERİ BİZDE YENİDEN CANLANDI"</strong></p>

              <p>&nbsp;</p>

              <p>İZMİR"DE HER MARKA GRAMOFON,PİKAP TAMİR VE BAKIMI TAŞPLAK,45"LİK,33"LÜK PLAK SATIŞI YAPMAKTAYIZ</p>

              <p>&nbsp;</p>

              <p>&nbsp;</p>

              <h3><a href="#">DİĞER ÜRÜNLERİMEDE BAKIN</a></h3>

              <p>&nbsp;</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PıkapIgnesıVeKrıstalı',
    methods: {
      say: function (message) {
        alert(message)
      }
    }
  }
</script>

<style scoped>
  .carousel-caption a{ color:white;}
  .carousel-caption p{ color: #88604B;
    font-size: medium;
  }
  .carousel{
    padding-top: 10px;
    margin-bottom: 50px;
    overflow: hidden;
  }
  .page-product-thumb {
    background: #fff;
    text-align: center;
    border: 1px solid #8a624d;
    margin-bottom: 20px;
    margin-right: 420px;
  }
  .owl-controls .owl-page.active span, .owl-controls.clickable .owl-page:hover span { /*sliderda buton gelince arka planın kahverengi olması*/
    background: #846b47 ;
  }
  .page-product-thumb .owl-controls { /*kare aktif butonların page-product içindeki boşluğu*/
    margin-top: -15px;
  }
  .owl-controls .owl-page { /*kare butonların yanyana gözükmesi*/
    display: inline-block;
  }
  .owl-controls .owl-page span {/*kontrollerin spanlerinin özellikleri*/
    background: #dadada ;
    border: 3px solid #fff;
    cursor: pointer;
    display: inline-block;
    height: 26px;
    margin: 0 2px;
    width: 26px;
  }
  .container {
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
  }
  .geridönüs-ic {
    color: #a87a62;
    padding: 20px 0;
  }
  .geridönüs-ic a {
    font-family: "century";
    color: #38281f;
    display: inline-block;
    padding: 2px;
  }
  .geridönüs-ic a:hover{
    text-decoration:underline;
  }
  a {
    background-color: transparent;
    font-size: 12px;
    text-decoration: none;
  }
  .ürünaciklama{ /*ürünün adı fiyat ve sepete ekle butonun çzellikleri*/
    float: right;
    margin-top: -55%;
    padding-left: 800px;
  }
  h1 { /*ürünün adının özellikleri*/
    margin: 0 0 10px;
    font-family: 'Lora';
    font-size: 20px;
    letter-spacing: 1px;
  }
  span.ürünfiyat{ /*ürürn fiyatınıın özellikleri*/
    color: #8a624d;
    display: block;
    font-family: Tahoma,Geneva;
    font-size: 20px;
    font-style: normal;
    font-weight: bold;
    margin: 20px 0;
    text-decoration: none;
  }
  a.buton { /*sepete ekle butonu*/
    background: url(img/bg-button.png) ;
    color: #fff;
    font-size: 13px;
    padding: 8px 20px;
    margin-top: 15px;
    text-align: center;
    text-decoration: none;
  }
  ul.aciklama-row { /*açıklama yazısının altındaki çizgi*/
    border-bottom: 1px solid #735240;
  }
  .ürünaciklama-grid{ /*açıklama gridinin yukardan yüksekliği*/
    margin-top: 30px;
  }
  ul { /*açıklama yazısının konumu*/
    margin: 0;
    padding: 0;
  }
  ul.aciklama-row li {
    display: inline-block; /*açıklama yazısının küçük blok seklinde gözükmesi*/
    background: #7a5644; /*açıklama yazısının arkaplan rengi*/
  }
  ul.aciklama-row li a { /*açıklama yazısının içeriği*/
    color: #fff;
    display: block;
    padding: 8px 20px;
    text-decoration: none;
    font-family: 'Century', serif;
    font-size: 12px;
  }
  p { /*açıklama yazısının altındaki boşluk*/
    padding: 6px 0;
    font-family: 'Lora';
  }
  em {
    font-style: italic;
    font-family: 'Lora';
  }
  strong { /*açıklama yazısının altındaki yazıların kalınlığı*/
    font-weight: bold;
    font-family: 'Lora';
    font-size: 14px;
  }
</style>
