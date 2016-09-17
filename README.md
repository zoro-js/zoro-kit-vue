# zoro-kit-vue

## TODO

- guide/transitions
- guide/comparison
- http://www.w3.org/wiki/WebComponents/
- https://github.com/w3c/webcomponents/blob/gh-pages/proposals/Slots-Proposal.md and is attribute
- MVVM https://en.wikipedia.org/wiki/Model_View_ViewModel
- use functional components to reuse template pieces
- XSS https://en.wikipedia.org/wiki/Cross-site_scripting
- SPA https://en.wikipedia.org/wiki/Single-page_application
- shorthand, v-bind:attribute -> :attribute, v-on:click -> @click
- declarative imperative
- event modifiers: stop, prevent, capture, self
- key modifiers
- special tags like <component>, <template> and <partial>

# component

- http://www.w3.org/TR/custom-elements/#concepts

## registration

- To register a global component, you can use Vue.component(tagName, options).
- You don’t have to register every component globally. You can make a component available only in the scope of another instance/component by registering it with the components instance option.
- The same encapsulation applies for other registerable Vue features, such as directives.
- option data and el must be functions.

### template

- <script type="text/x-template">
- inline template string
- .vue
- HTML template
  - In case of a custom element you should use the is special attribute
  - In case of a <template> inside of a <table> you should use <tbody>

## props

- A child component needs to explicitly declare the props it expects to receive using the props option

- when you pass children without a slot attribute into a component, those children are stored on the component instance at $slots.default.
key, ref, slot

- http://vue-loader.vuejs.org/en/start/spec.html
- https://github.com/w3c/webcomponents/blob/gh-pages/proposals/Slots-Proposal.md
- components must contain exactly one root node (render-function)
- http://vue-loader.vuejs.org/en/features/hot-reload.html
- http://webpack.github.io/docs/code-splitting.html
- https://webpack.github.io/docs/webpack-dev-server.html
- http://vue-loader.vuejs.org/en/configurations/asset-url.html


# lint

- http://vue-loader.vuejs.org/en/workflow/linting.html
- https://github.com/hedefalk/atom-vue/issues/16#issuecomment-177169198
- https://github.com/BenoitZugmeyer/eslint-plugin-html
- 装了 eslint-plugin-html 之后 eslint-loader 就可以正常工作了
- atom 里面设置 lint HTML files

- vue-validator https://github.com/vuejs/vue-validator
- babel-plugin-transform-vue-jsx https://github.com/vuejs/babel-plugin-transform-vue-jsx

# vuex-router-sync

// Do not sync https://github.com/vuejs/vuex/issues/285
// import {sync} from 'vuex-router-sync'
// sync(store, router)
