import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import FirstRoute from '@/components/FirstRoute'
import FirstRouteChild from '@/components/FirstRouteChild'
import SecondRouteChild from '@/components/SecondRouteChild'
import PikapIgneleri from '@/components/PikapIgneleri'
import PikapIgnesiVeKristali from '@/components/PikapIgnesiVeKristali'
import SatınAlButon from '@/components/SatınAlButon'
import SepetCikar from '@/components/SepetCikar'
import fixedFooter from '@/components/fixedFooter'
import HakkımızdaStepper from '@/components/HakkımızdaStepper'
import Iletisim from '@/components/Iletisim'
import SSS from '@/components/SSS'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/firstroute',
      name: 'FirstRoute',
      component: FirstRoute
    },
    {
      path: '/Giris',
      name: 'Giris',
      component: FirstRouteChild
    },
    {
      path: '/Sepet',
      name: 'Sepet',
      component: SecondRouteChild
    },
    {
      path: '/PikapIgneleri',
      name: 'PikapIgneleri',
      component: PikapIgneleri
    },
    {
      path: '/PikapIgnesiVeKristali',
      name: 'PikapIgnesiVeKristali',
      component: PikapIgnesiVeKristali
    },
    {
      path: '/butonsepet',
      name: 'butonsepet',
      component: SatınAlButon
    },
    {
      path: '/sepetcikar',
      name: 'sepetcikar',
      component: SepetCikar
    },
    {
      path: '/footer',
      name: 'footer',
      component: fixedFooter
    },
    {
      path: '/Hakkımızda',
      name: 'Hakkımızda',
      component: HakkımızdaStepper
    },
    {
      path: '/İletişim',
      name: 'İletişim',
      component: Iletisim
    },
    {
      path: '/sss',
      name: 'sss',
      component: SSS
    }
  ]
})
