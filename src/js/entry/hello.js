import 'module/common'
import Foo from 'module/hello/foo'
import Hello from 'module/hello/hello'
import ClassStyle from 'module/hello/class-style'
import IfShowElse from 'module/hello/if-show-else'
import Event from 'module/hello/event'
import Form from 'module/hello/form'

import MyComponent from 'component/my-component'
import Counter from 'component/counter'
import AnchoredHeading from 'component/anchored-heading'

window.vm = new Vue({
  render (h) {
    return (
      <div>
        <Foo />
        <Hello />
        <ClassStyle />
        <IfShowElse />
        <Event />
        <Form />
        <MyComponent />
        <Counter />
        <Counter />
        <Counter />
        <hr />
        <AnchoredHeading level={3}>
          Hello world!
        </AnchoredHeading>
      </div>
    )
  }
}).$mount('#app')
