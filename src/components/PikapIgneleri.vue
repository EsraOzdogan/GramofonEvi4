<template>
  <div class="hello">
    <div class="container"><!--anasayfa ve pikapiğnesi sayfasına gidiş-->
    <div class="row">
      <div class="geridönüs-ic">
        <a><router-link to="/">Ana Sayfa</router-link></a>  <!--eski sayfalara dönüş linkleri-->
        <span> &nbsp; &gt; &nbsp;</span>
        <a><router-link to="/PikapIgneleri">PİKAP İĞNESİ -AKS</router-link></a>
      </div>
    </div>
    <div class="Urun">
      <div class=""><!--ürün adet ve filtre-->
        <h1>PİKAP İĞNESİ -AKS</h1>
        <div>
          <div class="ürünsayi">
            <div>  <!--ürün bilgisi-->
              <div>
                87 ürün
              </div>

              <div class="ürünsecenek">  <!--ürün filtreleme-->
                <select id="ürünfiltreleme">
                  <option value="alfabetik-asc">Ürün Adı (A-Z)</option>
                  <option value="alfabetik-desc">Ürün Adı (Z-A)</option>
                  <option value="tarih-desc" selected="selected">En yeniler</option>
                  <option value="fiyat-asc">En düşük fiyat</option>
                  <option value="fiyat-desc">En yüksek fiyat</option>
                </select>
              </div>

            </div>
          </div>
          <div class="row">
            <div class="ürün-grid">  <!--ürünler-->
              <div class="ürün">
                <div class="ürün-resim">  <!--ürün resmi-->
                
                  <a>         
                    <a><router-link to="/PikapIgnesiVeKristali"> <img src="../components/img/img12.jpg" alt=""></router-link></a> <!--ürün sayfasına gidiş-->
                  </a>
                </div>
                <div class="ürün-aciklama">   <!--ürün açıklama kısmı-->
                  <a class="ürün-baslik">  <a><router-link to="/PikapIgnesiVeKristali">SANSUI SN-80 PİKAP İĞNESİ VE KRİSTALİ</router-link></a></a><br> <!--ürün sayfasına gidiş-->
                  <span class="ürün-fiyat">
                                        400 TL
                                    </span>
                </div>
              </div>
            </div>
            <div class="ürün-grid">
              <div class="ürün">
                <div class="ürün-resim">
                  <a href="#">
                    <img src="../components/img/img14.jpg" alt="">
                  </a>
                </div>
                <div class="ürün-aciklama">
                  <a href="#" class="ürün-baslik">HITACHI DS ST 102 PİKAP İĞNESİ</a><br>
                  <span class="ürün-fiyat">
                                        150 TL
                                    </span>
                </div>
              </div>
            </div>
            <div class="ürün-grid">
              <div class="ürün">
                <div class="ürün-resim">
                  <a href="#">
                    <img src="../components/img/img16.jpg" alt="">
                  </a>
                </div>
                <div class="ürün-aciklama">
                  <a href="#" class="ürün-baslik">SHARP STY 706 PİKAP İĞNESİ</a><br>
                  <span class="ürün-fiyat">
                                        150 TL
                                    </span>
                </div>
              </div>
            </div>
            <div class="ürün-grid">
              <div class="ürün">
                <div class="ürün-resim">
                  <a href="#">
                    <img src="../components/img/img11.jpg" alt="">
                  </a>
                </div>
                <div class="ürün-aciklama">
                  <a href="#" class="ürün-baslik">HITACHI ST 101 PİKAP İĞNESİ</a><br>
                  <span class="ürün-fiyat">
                                        150 TL
                                    </span>
                </div>
              </div>
            </div>
            <div class="ürün-grid">
              <div class="ürün">
                <div class="ürün-resim">
                  <a href="">
                    <img src="../components/img/img15.jpg" alt="">
                  </a>
                </div>
                <div class="ürün-aciklama">
                  <a href="" class="ürün-baslik">SONY ND 127P PİKAP İĞNESİ </a><br>
                  <span class="ürün-fiyat">
                                        150 TL
                                    </span>
                </div>
              </div>
            </div>
            <div class="ürün-grid">
              <div class="ürün">
                <div class="ürün-resim">
                  <a href="#">
                    <img src="../components/img/img17.jpg" alt="">
                  </a>
                </div>
                <div class="ürün-aciklama">
                  <a href="#" class="ürün-baslik">CEC -MC8 PİKAP İĞNESİ</a><br>
                  <span class="ürün-fiyat">
                                        150 TL
                                    </span>
                </div>
              </div>
            </div>
            <div class="ürün-grid">
              <div class="ürün">
                <div class="ürün-resim">
                  <a href="#">
                    <img src="../components/img/img18.jpg" alt="">
                  </a>
                </div>
                <div class="ürün-aciklama">
                  <a href="#" class="ürün-baslik">MICRO V3200 PİKAP İĞNESİ</a><br>
                  <span class="ürün-fiyat">
                                        150 TL
                                    </span>
                </div>
              </div>
            </div>
            <div class="ürün-grid">
              <div class="ürün">
                <div class="ürün-resim">
                  <a href="#">
                    <img src="../components/img/img19.jpg" alt="">
                  </a>
                </div>
                <div class="ürün-aciklama">
                  <a href="#" class="ürün-baslik">KENWOOD N46 PİKAP İĞNESİ </a><br>
                  <span class="ürün-fiyat">
                                        150 TL
                                    </span>
                </div>
              </div>
            </div>
            <div class="ürün-grid">
              <div class="ürün">
                <div class="ürün-resim">
                  <a href="#">
                    <img src="../components/img/img20.jpg" alt="">
                  </a>
                </div>
                <div class="ürün-aciklama">
                  <a href="#" class="ürün-baslik">YAMAHA N 6800 PİKAP İĞNESİ </a><br>
                  <span class="ürün-fiyat">
                                        150 TL
                                    </span>
                </div>
              </div>
            </div>
            <div class="ürün-grid">
              <div class="ürün">
                <div class="ürün-resim">
                  <a href="#">
                    <img src="../components/img/img21.jpg" alt="">
                  </a>
                </div>
                <div class="ürün-aciklama">
                  <a href="#" class="ürün-baslik">ONKYO DN 39 PİKAP İĞNESİ </a><br>
                  <span class="ürün-fiyat">
                                        150 TL
                                    </span>
                </div>
              </div>
            </div>
            <div class="ürün-grid">
              <div class="ürün">
                <div class="ürün-resim">
                  <a href="#">
                    <img src="../components/img/img22.jpg" alt="">
                  </a>
                </div>
                <div class="ürün-aciklama">
                  <a href="#" class="ürün-baslik">CEC - MC 7 PİKAP İĞNESİ </a><br>
                  <span class="ürün-fiyat">
                                        150 TL
                                    </span>
                </div>
              </div>
            </div>
            <div class="ürün-grid">
              <div class="ürün">
                <div class="ürün-resim">
                  <a href="#">
                    <img src="../components/img/img23.jpg" alt="">
                  </a>
                </div>
                <div class="ürün-aciklama">
                  <a href="#" class="ürün-baslik">CEC - RS-5 PİKAP İĞNESİ </a><br>
                  <span class="ürün-fiyat">
                                        150 TL
                                    </span>
                </div>
              </div>
            </div>
            <div class="ürün-grid">
              <div class="ürün">
                <div class="ürün-resim">
                  <a href="#">
                    <img src="../components/img/img24.jpg" alt="">
                  </a>
                </div>
                <div class="ürün-aciklama">
                  <a href="#" class="ürün-baslik">ONKYO - DN-57 PİKAP İĞNESİ </a><br>
                  <span class="ürün-fiyat">
                                        150 TL
                                    </span>
                </div>
              </div>
            </div>
            <div class="ürün-grid">
              <div class="ürün">
                <div class="ürün-resim">
                  <a href="#">
                    <img src="../components/img/img26.jpg" alt="">
                  </a>
                </div>
                <div class="ürün-aciklama">
                  <a href="#" class="ürün-baslik">CEC MC 5 PİKAP İĞNESİ </a><br>
                  <span class="ürün-fiyat">
                                        150 TL
                                    </span>
                </div>
              </div>
            </div>
            <div class="ürün-grid">
              <div class="ürün">
                <div class="ürün-resim">
                  <a href="#">
                    <img src="../components/img/img25.jpg" alt="">
                  </a>
                </div>
                <div class="ürün-aciklama">
                  <a href="#" class="ürün-baslik">SHARP STY-121 PİKAP İĞNESİ</a><br>
                  <span class="ürün-fiyat">
                                        150 TL
                                    </span>
                </div>
              </div>
            </div>
            <div class="ürün-grid">
              <div class="ürün">
                <div class="ürün-resim">
                  <a href="#">
                    <img src="../components/img/img27.jpg" alt="">
                  </a>
                </div>
                <div class="ürün-aciklama">
                  <a href="#" class="ürün-baslik">TOSHIBA N20C PİKAP İĞNESİ</a><br>
                  <span class="ürün-fiyat">
                                        150 TL
                                    </span>
                </div>
              </div>
            </div>
            <div class="ürün-grid">
              <div class="ürün">
                <div class="ürün-resim">
                  <a href="#">
                    <img src="../components/img/img28.jpg" alt="">
                  </a>
                </div>
                <div class="ürün-aciklama">
                  <a href="#" class="ürün-baslik">SONY ND-135G PİKAP İĞNESİ </a><br>
                  <span class="ürün-fiyat">
                                        150 TL
                                    </span>
                </div>
              </div>
            </div>
            <div class="ürün-grid">
              <div class="ürün">
                <div class="ürün-resim">
                  <a href="#">
                    <img src="../components/img/img29.jpg" alt="">
                  </a>
                </div>
                <div class="ürün-aciklama">
                  <a href="#" class="ürün-baslik">SANSUI SN-303 PİKAP İĞNESİ </a><br>
                  <span class="ürün-fiyat">
                                        150 TL
                                    </span>
                </div>
              </div>
            </div>
            <div class="ürün-grid">
              <div class="ürün">
                <div class="ürün-resim">
                  <a href="#">
                    <img src="../components/img/img35.jpg" alt="">
                  </a>
                </div>
                <div class="ürün-aciklama">
                  <a href="#" class="ürün-baslik">SANYO ST-101 PİKAP İĞNESİ</a><br>
                  <span class="ürün-fiyat">
                                        175 TL
                                    </span>
                </div>
              </div>
            </div>
            <div class="ürün-grid">
              <div class="ürün">
                <div class="ürün-resim">
                  <a href="#">
                    <img src="../components/img/img30.jpg" alt="">
                  </a>
                </div>
                <div class="ürün-aciklama">
                  <a href="#" class="ürün-baslik">KENWOOD N47 PİKAP İĞNESİ </a><br>
                  <span class="ürün-fiyat">
                                        175 TL
                                    </span>
                </div>
              </div>
            </div>
            <div class="ürün-grid">
              <div class="ürün">
                <div class="ürün-resim">
                  <a href="#">
                    <img src="../components/img/img31.jpg" alt="">
                  </a>
                </div>
                <div class="ürün-aciklama">
                  <a href="#" class="ürün-baslik">SHARP RP-117 PİKAP İĞNESİ </a><br>
                  <span class="ürün-fiyat">
                                        175 TL
                                    </span>
                </div>
              </div>
            </div>
            <div class="ürün-grid">
              <div class="ürün">
                <div class="ürün-resim">
                  <a href="#">
                    <img src="../components/img/img32.jpg" alt="">
                  </a>
                </div>
                <div class="ürün-aciklama">
                  <a href="#" class="ürün-baslik">SANYO ST-25D PİKAP İĞNESİ </a><br>
                  <span class="ürün-fiyat">
                                        150 TL
                                    </span>
                </div>
              </div>
            </div>
            <div class="ürün-grid">
              <div class="ürün">
                <div class="ürün-resim">
                  <a href="#">
                    <img src="../components/img/img33.jpg" alt="">
                  </a>
                </div>
                <div class="ürün-aciklama">
                  <a href="#" class="ürün-baslik">MICRO V3300 PİKAP İĞNESİ </a><br>
                  <span class="ürün-fiyat">
                                        175 TL
                                    </span>
                </div>
              </div>
            </div>
            <div class="ürün-grid">
              <div class="ürün">
                <div class="ürün-resim">
                  <a href="#">
                    <img src="../components/img/img34.jpg" alt="">
                  </a>
                </div>
                <div class="ürün-aciklama">
                  <a href="../components/img/img34.jpg" class="ürün-baslik">TOSHIBA - N-301C PİKAP İĞNESİ </a><br>
                  <span class="ürün-fiyat">
                                        150 TL
                                    </span>
                </div>
              </div>
            </div>
            <div class="ürün-grid">
              <div class="ürün">
                <div class="ürün-resim">
                  <a href="#">
                    <img src="../components/img/img36.jpg" alt="">
                  </a>
                </div>
                <div class="ürün-aciklama">
                  <a href="#" class="ürün-baslik">JVC DT 33 PİKAP İĞNESİ </a><br>
                  <span class="ürün-fiyat">
                                        150 TL
                                    </span>
                </div>
              </div>
            </div>
            <div class="ürün-grid">
              <div class="ürün">
                <div class="ürün-resim">
                  <a href="#">
                    <img src="../components/img/img37.jpg" alt="">
                  </a>
                </div>
                <div class="ürün-aciklama">
                  <a href="#" class="ürün-baslik">KENWOOD N39 II PİKAP İĞNESİ </a><br>
                  <span class="ürün-fiyat">
                                        150 TL
                                    </span>
                </div>
              </div>
            </div>
            <div class="ürün-grid">
              <div class="ürün">
                <div class="ürün-resim">
                  <a href="#">
                    <img src="../components/img/img38.jpg" alt="">
                  </a>
                </div>
                <div class="ürün-aciklama">
                  <a href="#" class="ürün-baslik">CORAL 555-S PİKAP İĞNESİ </a><br>
                  <span class="ürün-fiyat">
                                        150 TL
                                    </span>
                </div>
              </div>
            </div>
            <div class="ürün-grid">
              <div class="ürün">
                <div class="ürün-resim">
                  <a href="#">
                    <img src="../components/img/img39.jpg" alt="">
                  </a>
                </div>
                <div class="ürün-aciklama">
                  <a href="#" class="ürün-baslik">SANYO SN 27 PİKAP İĞNESİ </a><br>
                  <span class="ürün-fiyat">
                                        150 TL
                                    </span>
                </div>
              </div>
            </div>
            <div class="ürün-grid">
              <div class="ürün">
                <div class="ürün-resim">
                  <a href="#">
                    <img src="../components/img/img40.jpg" alt="">
                  </a>
                </div>
                <div class="ürün-aciklama">
                  <a href="#" class="ürün-baslik">PIONEER PN 11 PİKAP İĞNESİ </a><br>
                  <span class="ürün-fiyat">
                                        150 TL
                                    </span>
                </div>
              </div>
            </div>
            <div class="ürün-grid">
              <div class="ürün">
                <div class="ürün-resim">
                  <a href="#">
                    <img src="../components/img/img41.jpg" alt="">
                  </a>
                </div>
                <div class="ürün-aciklama">
                  <a href="#" class="ürün-baslik">SANYO ST 5D PİKAP İĞNESİ </a><br>
                  <span class="ürün-fiyat">
                                        150 TL
                                    </span>
                </div>
              </div>
            </div>
            <div class="ürün-grid">
              <div class="ürün">
                <div class="ürün-resim">
                  <a href="#">
                    <img src="../components/img/img42.jpg" alt="">
                  </a>
                </div>
                <div class="ürün-aciklama">
                  <a href="#" class="ürün-baslik">NATIONAL EPS 27STSD PİKAP İĞNESİ</a><br>
                  <span class="ürün-fiyat">
                                        150 TL
                                    </span>
                </div>
              </div>
            </div>
            <div class="ürün-grid">
              <div class="ürün">
                <div class="ürün-resim">
                  <a href="#">
                    <img src="../components/img/img43.jpg" alt="">
                  </a>
                </div>
                <div class="ürün-aciklama">
                  <a href="#" class="ürün-baslik">LENCO M94 PİKAP İĞNESİ</a><br>
                  <span class="ürün-fiyat">
                                        150 TL
                                    </span>
                </div>
              </div>
            </div>
            <div class="ürün-grid">
              <div class="ürün">
                <div class="ürün-resim">
                  <a href="#">
                    <img src="../components/img/img44.jpg" alt="">
                  </a>
                </div>
                <div class="ürün-aciklama">
                  <a href="#" class="ürün-baslik">MICRO V2100PİKAP İĞNESİ </a><br>
                  <span class="ürün-fiyat">
                                        175 TL
                                    </span>
                </div>
              </div>
            </div>
            <div class="ürün-grid">
              <div class="ürün">
                <div class="ürün-resim">
                  <a href="#">
                    <img src="../components/img/img45.jpg" alt="">
                  </a>
                </div>
                <div class="ürün-aciklama">
                  <a href="#" class="ürün-baslik">DENON DS N42 PİKAP İĞNESİ </a><br>
                  <span class="ürün-fiyat">
                                        175 TL
                                    </span>
                </div>
              </div>
            </div>
            <div class="ürün-grid">
              <div class="ürün">
                <div class="ürün-resim">
                  <a href="#">
                    <img src="../components/img/img46.jpg" alt="">
                  </a>
                </div>
                <div class="ürün-aciklama">
                  <a href="#" class="ürün-baslik">JVC DT-50 PİKAP İĞNESİ </a><br>
                  <span class="ürün-fiyat">
                                        150 TL
                                    </span>
                </div>
              </div>
            </div>
            <div class="ürün-grid">
              <div class="ürün">
                <div class="ürün-resim">
                  <a href="#">
                    <img src="../components/img/img47.jpg" alt="">
                  </a>
                </div>
                <div class="ürün-aciklama">
                  <a href="#" class="ürün-baslik">ELAC - SM-107 PİKAP İĞNESİ </a><br>
                  <span class="ürün-fiyat">
                                        50 TL
                                    </span>
                </div>
              </div>
            </div>
            <div class="ürün-grid">
              <div class="ürün">
                <div class="ürün-resim">
                  <a href="#">
                    <img src="../components/img/img48.jpg" alt="">
                  </a>
                </div>
                <div class="ürün-aciklama">
                  <a href="#" class="ürün-baslik">SHARP STY 717 </a><br>
                  <span class="ürün-fiyat">
                                        150 TL
                                    </span>
                </div>
              </div>
            </div>
            <div class="ürün-grid">
              <div class="ürün">
                <div class="ürün-resim">
                  <a href="#">
                    <img src="../components/img/img49.jpg" alt="">
                  </a>
                </div>
                <div class="ürün-aciklama">
                  <a href="#" class="ürün-baslik">GOLDRING G850 PİKAP İĞNESİ </a><br>
                  <span class="ürün-fiyat">
                                        150 TL
                                    </span>
                </div>
              </div>
            </div>
            <div class="ürün-grid">
              <div class="ürün">
                <div class="ürün-resim">
                  <a href="#">
                    <img src="../components/img/img50.jpg" alt="">
                  </a>
                </div>
                <div class="ürün-aciklama">
                  <a href="#" class="ürün-baslik">PIONEER PN 400 NEEDLE</a><br>
                  <span class="ürün-fiyat">
                                        150 TL
                                    </span>
                </div>
              </div>
            </div>
            <div class="ürün-grid">
              <div class="ürün">
                <div class="ürün-resim">
                  <a href="#">
                    <img src="../components/img/img51.jpg" alt="">
                  </a>
                </div>
                <div class="ürün-aciklama">
                  <a href="#" class="ürün-baslik">PANASONIC EPS-18 PİKAP İĞNESİ </a><br>
                  <span class="ürün-fiyat">
                                        150 TL
                                    </span>
                </div>
              </div>
            </div>
          </div>
          <div class="ürünsayi">
            <div class="row">
              <div class="ürünsecenek1">
                <ul>
                  <li class="aktifsayfa">  <!--aktif sayfai-->
                    <a>1</a>
                  </li>         <!--sonraki sayfaya geçiş-->
                  <li>
                    <a href="#" data-ci-pagination-page="2" class="">2</a>
                  </li>
                  <li>
                    <a href="#" data-ci-pagination-page="3" class="">3</a>
                  </li>
                  <li>
                    <a href="#" data-ci-pagination-page="2" rel="next" class="">&gt;</a>
                  </li>
                </ul>
              </div>
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
    name: 'PikapIgneleri'
  }
</script>

<style scoped>
  .container {
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
    background-color: inherit;
  }
  .geridönüs-ic {   /*geridönüş anasayfa ve pikapsayfasına döniş kısmının yazı rengi ve kenarlardan boşluğu*/
    color: black;
    padding: 20px 0;

  }
  .geridönüs-ic a {  /*geridönüş anasayfa ve pikapsayfasının yazı rengi stiili ve kenar boşluğu*/
    font-family: "century";
    color: black;
    padding: 2px;
  }
  a:hover { /*anasayfa ve pikap iğnesine gidiş linkinin underline olması*/
    text-decoration: underline;
  }
  h1 {  /*pikap iğnesi aks yazısının özellükleri*/
    font-size: 30px;
    margin: 0px 0 0;
    font-family: 'Lora';
    letter-spacing: 1px;
    font-weight: 500;
    line-height: 1.1;
    color: inherit;
    display: block;
  }
  .ürünsayi {  /*87 ürün yazısının ve select menünün bulunduğu gridin özellikleri*/
    border: 3px double #ddd;
    background: white;
    margin: 15px 0 30px;
    padding: 3%;
  }
  .ürünsecenek { /*select menünün mzellikleri*/
    float: right;
    margin-bottom: -75px;
  }
  .ürünfiltreleme { /*select menünün genişliği ve kenar boşlukları*/
    width: 135px;
    padding: 5px;
  }
  option {/* select menüdeki optionların özellikleri*/
    font-weight: normal;
    display: block;
    white-space: pre;
    min-height: 1.2em;
    padding: 0px 2px 1px;
  }
  .ürün-grid {
    float: left;
    width: 25%;
    min-height: 1px;
    padding-left: 15px;
    padding-right: 15px;
  }
  .ürün-resim {  /*ürün resminin özellikleri*/
    height: 300px;
  }
  .ürün-resim a img { /*ürün gridindeki resimlerin özellikleri*/
    width: 100%;
    vertical-align: middle;
    border: 0;
  }
  .ürün-aciklama a.ürün-baslik { /*ürünlerin isimlerinin özellikleri renk biyiklik kenar boşluğu vs*/
    color: #333;
    display: inline-block; /*başlık arası blok görünümü**/
    font-size: 12px;
  }
  .ürün-aciklama a { /*ürün başlık ve fiyatın arasındaki boşluk*/
    font-family: "century";
    height: 50px;
  }
  span.ürün-fiyat { /*ürün fiyatının özellikleri*/
    color: #8a624d;
    margin: 6px 0;
    font-size: 15px;
    font-weight: bold; /*yazının kalın olması*/
  }
  .ürünsecenek1 ul li {
    display: inline-block;/*sayfa ileri gerisinin blok şeklinde yanyana olmaası*/
  }
  .ürünsecenek1 ul li.aktifsayfa a { /*şuanki sayfanın yani 1. sayfanın özellikleri renk ve arka planın kahverengi olması*/
    color: black;
    background-color: #88604B;
  }
  .ürünsecenek1 ul li.active a:hover { /*1 rakamına tıklarken rengin siyah ve yazının altının çizgili olması*/
    color: black;
    text-decoration: underline;
  }
  .ürünsecenek1 ul li a { /*sayfa geçişleri kısmındaki blok olma özellikleri*/
    color: #88604B;
    border: 1px solid gray;
    display: inline-block;
    height: 36px;
    line-height: 34px;
    text-align: center;
    width: 36px;
  }
</style>
