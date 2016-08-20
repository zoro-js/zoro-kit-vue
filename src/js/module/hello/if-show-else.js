const tpl = `
  <div class="container-fluid m-a-1">
    <h1 v-if="ok">ok</h1>
    <h1 v-if="even">even</h1>
    <h1 v-else>odd</h1>
    <template v-if="ok">
      <h1>Title</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </template>
    <h1 v-show="ok">ok</h1>
    <h1 v-show="even">even</h1>
    <h1 v-show="!even">odd</h1>
  </div>
`

window.vmIfShowElse = new Vue({
  template: tpl,
  data: {
    ok: true,
    even: false
  }
}).$mount('#if-show-else')
