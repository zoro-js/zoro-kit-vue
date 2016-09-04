import Counter from 'module/vuex/counter/Counter'
import store from 'module/vuex/counter/store'

new Vue({
  store,
  render: h => h(Counter)
}).$mount('#app')
