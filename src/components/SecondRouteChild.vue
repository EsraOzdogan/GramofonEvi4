<template>
  <div class="hello">
    <div class="wrapper">
      <div class="sepet-container">  <!-- sepetin arkaplanı-->
        <div class="sepet-row">
          <div class="ürün">  <!-- ürün tablosu paneli-->
            <div class="panel">
              <div class="panel-icerik">
                <table class="tablo table-hover">  <!-- tablo-->
                  <thead>
                  <tr>
                    <th>Ürün</th>
                    <th>Adet</th>
                    <th>Fiyat</th>
                    <th>Toplam Tutar</th>
                    <th></th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>SANSUI SN-80 PİKAP İĞNESİ VE KRİSTALİ </td>  <!--tablo içeiği-->
                    <td>1</td>
                    <td>400.00 TL</td>
                    <td>400.00 TL</td>
                    <td>
                      <button type="button" class="buton " >
                            <span>
                              <router-link to="/sepetcikar"></router-link>   <!-- sepet çıkar sayfasına gidiş-->
                              <i class="icons-office-52"> </i>
                            </span>
                      </button>
                    </td>
                  </tr>
                  </tbody>
                </table>

              </div>

            </div>

          </div>



          <div class="siparisözeti">  <!--sipariş özeeti paneli-->
            <div class="panel">
              <div class="panel-icerik1">

                <row>                           <!-- başlık-->
                  <h2>SİPARİŞ ÖZETİ</h2>
                </row>

                <div class="sol">
                  <h5>Ara Toplam:</h5>
                </div>
                <div class="sag">
                  <h5>400.00TL</h5>
                </div>

                <div class="toplam-tutar">   <!-- toplam tutar-->
                  <h6>Toplam Tutar:</h6>
                </div>
                <div class="para">            <!--para -->
                  <h2>400.00TL</h2>
                </div>

                <button type="button" class="buton1 btn-success ladda-button" >  <!--satın al butonu-->

                  <span class="ladda-label"><i class="icons-office-51"></i> <router-link to="/butonsepet">Satın Al</router-link></span>

                </button>

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
    min-height: 430px;
    padding-top: 25px;
    padding-left: 20px;
    width: 100%;
  }
  .ürün{  /*ürün tablosu özelliği*/
    width: 600px;  /*genişlik*/
    margin-left: 45px; /*soldan 45px ötelenmesi*/
    margin-top: 10px; /*sağdan 10px ötelenmesi*/
  }
  .panel{  /*panellerin özellikleri*/
    background: white;
    border-radius: 0;
    border: 1px solid #E2E2E2;
    color: dimgrey;
    box-shadow: 0 0 5px #E2E2E2;
    margin-top: -15px;
  }
  .panel-icerik{ /*panelin içinden kenar boşlukları*/
    padding: 20px 20px 10px 20px;
    font-size: 15px;
  }
  .tablo{ /*ürün özellikleri tablosunun özelliikleri*/
    width: 100%;
    max-width: 100%;
    margin-bottom: 20px;
    background-color: transparent;
    border-spacing: 0;
    border-collapse: collapse;
    display: table;
    border-color: grey;
  }
  thead {  /*ürün özellikleri tablosunun yukarıdaki ürün adet fiyat vsnin özellikleri*/
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
  }
  .tablo > thead > tr > th{  /*tablodaki ürün adet fiyat vs özellikleri*/
    padding: 8px;
    vertical-align: middle;
    border-bottom: 2px solid #ddd;
    line-height: 1.5;
  }
  .tablo> tbody > tr > td{ /*tablodaki body kısmındaki yazıların özellikleri*/
    padding: 8px;
    vertical-align: middle;
    border-top: 1px solid #ddd;
    line-height: 1.5;
  }
  .table-hover td {/*ürünün özelliklerinin alttondaki çizgi*/
    border-bottom: 2px solid #F0F4F8;
  }
  .buton { /*ürünü silme butonunun özellikleri*/
    margin: 10px 1px;
    cursor: pointer;
    border-radius: 2px;
    background-color: white;
    box-shadow: 0 0 5px #E2E2E2;
    font-size: 11px;
    padding: 5px 12px ;
    border: 1px solid #E0E0E0 ;
    color: #373C40;
  }
  .siparisözeti{  /*sipariş özeti tablosunun gridinin öaellikleri*/
    width: 340px;
    margin-left: 705px;
    margin-top: -200px;
  }
  .panel-icerik1{ /*sipariş özeti tablosunun panel içeriği*/
    padding: 10px 40px 20px 40px;
    background-clip: padding-box;
  }
  h2{ /*sipariş özeti yazısının özellikleri*/
    text-align: center; /*yazının  merkezde olması*/
    color: inherit; /*rengini panel rengine benzemesi*/
    font-family: Helvetica Neue,Helvetica,Arial;
    font-weight: 300; /*yazının  kalınlıpı*/
    font-size: 25px;
  }
  .sol{ /*aratoplam yazısının sola konumladırılması*/
    float: left;
  }
  .sag{ /*fiyatın sağa konumlandırılması*/
    float:right;
  }
  .toplam-tutar{ /*toplam tutar yazısının özelliği*/
    margin-left: 100px;
    margin-right: 100px;
    color: #2d2d2d;
    background-color: #9e9e9e;
    margin-top: 50px;
    text-align: center;
    width: 80px;
  }
  .para{ /*fiyatın merkeze konumlandırılması*/
    text-align: center;
    margin-top: -5px;
  }
  .buton1{  /*satın al butonunun özellikleri*/
    height: 35px;
    background-color: #4caf50;
    color: white;
    position: relative;
    border-color: gray;
    margin-left: 65px;
    width: 58%;
    padding : 8px 15px 15px;
    cursor: pointer;
    text-decoration: none;
    font-size: 14px;
    font-weight: 400;
    box-shadow: 0 0 5px gray;
    border: 0;
    border-radius: 2px;
    outline: none !important;
  }
  .btn-success {  /*butona gelince butonun renginin değişmesi**/
    background-color: #4caf50;
    color: rgba(255, 255, 255, 0.84);
  }
  /* .icons-office-51:before {
     content: "\e125";
   }*/
</style>
