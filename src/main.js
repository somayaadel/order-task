import Vue from 'vue'
import '@/assets/style/index.css'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import vuetify from './plugins/vuetify'
// import SweetAlert from './plugins/SweetAlert'
// import Vuelidate from './plugins/Vuelidate'
// import VueSignaturePad from './plugins/signature'

import './http.js'


library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

new Vue({
  router,

  vuetify,
  render: h => h(App)
}).$mount('#app')
