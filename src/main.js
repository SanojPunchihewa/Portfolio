import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import vueSmoothScroll from 'vue2-smooth-scroll'

import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/css/fontawesome.css";

Vue.use(vueSmoothScroll)

Vue.use(Buefy, {
  defaultIconPack: "fas"
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
