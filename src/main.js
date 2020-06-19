import Vue from 'vue'
import App from './App.vue'
import 'vue2-dropzone/dist/vue2Dropzone.min.css';
import '../public/assets/panavis.css'
import { store } from './store'
import { router } from './router'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
