import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bulma/css/bulma.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import CKEditor from '@ckeditor/ckeditor5-vue2';
import LottieAnimation from 'lottie-web-vue'
import 'aos/dist/aos.css'
import * as AOS from 'aos'

AOS.init()
Vue.config.productionTip = false
Vue.use(CKEditor);
Vue.use(LottieAnimation)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
