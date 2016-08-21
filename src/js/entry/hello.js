import 'module/common'
import Foo from 'module/hello/foo'
import Hello from 'module/hello/hello'
import ClassStyle from 'module/hello/class-style'
import IfShowElse from 'module/hello/if-show-else'
import Event from 'module/hello/event'
import Form from 'module/hello/form'

window.vm = new Vue({
  render (c) {
    return c('div', [
      c(Foo),
      c(Hello),
      c(ClassStyle),
      c(IfShowElse),
      c(Event),
      c(Form)
    ])
  }
}).$mount('#app')
