import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueCarousel from '@chenfengyuan/vue-carousel/dist/vue-carousel.js'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
// Vue.component(VueCarousel.name, VueCarousel)
Vue.use(VueCarousel)

new Vue({
  render: h => h(App)
}).$mount('#app')
