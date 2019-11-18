<template>
  <div class="hello">
    <div class="wrapper">
        <div class="container">
          <h3>Hakkımızda</h3>
         <div class="logo">

         <img src="../components/img/hakkımızda.jpeg">

        </div>
            <mdb-stepper simpleH :steps="steps"/>
         </div>
    </div>
  </div>
</template>

<script>
  import { mdbStepper } from 'mdbvue'

  export default {
    name: 'HakkımızdaStepper',
    components: {
      mdbStepper
    },
    data () {
      return {
        steps: [
          {
            content:
              '2003 YILININ HAZİRAN AYINDA 8 M2  ALANDA BAŞLADIĞIMIZ İŞİMİZ BİZİ ZAMANLA GÜZEL BİR SERÜVENE SÜRÜKLEDİ. KÜÇÜK DÜKKANIMIZDA HAREKET EDECEK YER YOKKEN , O ZAMANIN VERDİĞİ HEYECANLA PLAK ARŞİVİMİZİ OLUŞTURUP DAHA SONRA SESİMİZİ KOLEKSİYON SEVDALILARININ DESTEĞİYLE DUYURMAYA ÇALIŞTIK. ZAMANLA DÜKKANIMIZ VE FISILTI GAZETEMİZ GELİŞTİ. BÜYÜDÜK VE ARTIK FISILDAMIYORDUK. OLUŞTURDUĞUMUZ WEB SAYFAMIZ GRAMOFONEVİ.COM LA BİRÇOK KİTLEYE ULAŞABİLİYORDUK. '
          },
          {
            content:
              ' Sonra müzik kayıt tarihini oluşturuken geçmişimizin aslında plaklardan, pikaplardan yada gramofonlardan, yani sadece müzikten ibaret olmadığını gördük. Geçmiş zamanlarda; evlerde ve işyerlerinde kulanılmış objeleri, eşyaları mekanikleri toplamaya başladık. Ya da bize hikayeleri ile geldiler. Gramofon Evi bir yandan müzik derken, diğer taraftan da her döneme ait popart retro ve vintage ürünler ile hem restorasyon hem de satışını yaparak yelpazesini genişletmiş oldu.  Amatör ruhumuzu kaybetmeden sanatın ve tarihin etkisinde kalarak kendini yenielyen ve büyüyen ailemiz önce Balçova ve Alaçatı devamında da Kızlarağası Hanında Gramofon Evi ve Gramofon Evi Atölye olarak faaliyetine devam etmektedir.  '
          },
          {
            content:
              ' Kaderine terk edilmiş, zamana karşı duramayan pikap, radyo ve nostaljik cihazlarınızın bakımını, ayrıca antikalarınızın restorasyonlarını yaparak, yeniden hayat bulmalarını sağlıyoruz. Anılarınızdaki ürünler, işini bilen usta ellerde ilk günkü görüntüsüne ve performansına yeniden kavuşuyor. '
          },
          {
            content:
              ' Gramofon Evi Atölyeye gelen bütün ürünler restorasyon ve onarım işlemine tabi tutulmadan önce gerekli olan bütün kontrolleri yapılıp, eksiklikler tespit edildikten sonra, katalog ve şema bilgilerine göre yeniden değerlendirilmekte ve müşterilerin onay vermesiyle ilk günkü hallerine kavuşturulmaktadır.Bazen küçük bir oyuncağınız, bazen babanızdan kalan bir pikap, hatta anne annenizin duvarını süsleyen kocaman bir saat bile Gramofon Evi Atölyede hayat bulur.'
          },
          {
            content:
              ' Gramofon Evi Atölye hakkında ayrıntılı bilgiyi aşağıdaki linte bulabilirsiniz:http://www.gramofoneviatolye.com'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    width: 1170px;
    margin: 0 auto;
    padding: 0 15px;
  }
  .container{
      background-color: white;
      height: 700px;
  }
button{
    background-color: black;
    color:white;
}
.logo{
  text-align: center;
  margin-top:25px;
}
h3{
  text-align: center;
    margin-top: 40px;

}
</style>
