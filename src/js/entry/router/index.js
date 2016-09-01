import Vue from 'vue/dist/vue'

window.Vue = Vue

// 1. Use plugin.
// This installs <router-view> and <router-link>,
// and injects $router and $route to all router-enabled child components
Vue.use(VueRouter)

// 2. Define route components
import App from './App'
const Home = {template: '<div>Home</div>'}
const Foo = {template: '<div>Foo</div>'}
const Bar = {template: '<div>Bar</div>'}

const Parent = {
  template: `
    <div class='parent'>
      <h2>Parent</h2>
      <router-view class='child'></router-view>
    </div>
  `
}
const Default = {template: '<div>Default</div>'}
const Baz = {template: '<div>Baz</div>'}
const WithParams = {template: '<div>{{$route.params.id}}</div>'}

const About = {template: '<div>About</div>'}
const Users = {
  template: `
    <div>
      <h5></h5>
      <router-view></router-view>
    </div>
  `
}
const User = {template: '<div>{{$route.params.username}}</div>'}

// 3. Create the router
// The matching uses path-to-regexp, which is the matching engine used
// by express as well, so the same matching rules apply.
// For detailed rules, see https://github.com/pillarjs/path-to-regexp
const router = new VueRouter({
  mode: 'history',
  base: 'src/html/router/index.html',
  routes: [
    {
      path: '/',
      name: 'home',
      // redirect: '/parent',
      component: Home
    },
    {path: '/foo', name: 'foo', component: Foo},
    {path: '/bar', name: 'bar', component: Bar},
    {path: '/parent', component: Parent,
      children: [
        // an empty path will be treated as the default, e.g.
        // components rendered at /parent: Root -> Parent -> Default
        {path: '', name: 'parent', component: Default},
        // components rendered at /parent/foo: Root -> Parent -> Foo
        // absolute alias
        {path: 'foo', component: Foo, alias: '/parent-foo'},
        // components rendered at /parent/bar: Root -> Parent -> Bar
        // relative alias (alias to /parent/bar-alias)
        {path: 'bar', component: Bar, alias: 'bar-alias'},
        // NOTE absolute path here!
        // this allows you to leverage the component nesting without being
        // limited to the nested URL.
        // components rendered at /baz: Root -> Parent -> Baz
        // multiple aliases
        {path: '/baz', component: Baz, alias: ['/parent-baz', 'baz-alias']},
        {path: 'with-params/:id', component: WithParams},
        // relative redirect to a sibling route
        {path: 'relative-redirect', redirect: 'foo'}
      ]
    },
    {
      // a single route can define multiple named components
      // which will be rendered into <router-view>s with corresponding names.
      path: '/named-views',
      components: {
        default: Foo,
        a: Bar,
        b: Baz
      }
    },
    // params are denoted with a colon ":"
    {path: '/params/:foo/:bar'},
    // a param can be made optional by adding "?"
    {path: '/optional-params/:foo?'},
    // a param can be followed by a regex pattern in parens
    // this route will only be matched if :id is all numbers
    {path: '/params-with-regex/:id(\\d+)'},
    // asterisk can match anything
    {path: '/asterisk/*'},
    // make part of th path optional by wrapping with parens and add "?"
    {path: '/optional-group/(foo/)?bar'},
    {path: '/about', component: About},
    {path: '/users', component: Users,
      children: [
        {path: ':username', component: User}
      ]
    },
    // absolute redirect
    {path: '/absolute-redirect', redirect: '/parent/bar'},
    // named redirect
    {path: '/named-redirect', redirect: {name: 'parent'}},
    // redirect with params
    {path: '/redirect-with-params/:id', redirect: '/parent/with-params/:id'},
    // catch all redirect
    {path: '*', redirect: '/'}
  ]
})

// 4. Create and mount root instance.
// Make sure to inject the router.
// Route components will be rendered inside <router-view>.
new Vue(Vue.util.extend({router}, App)).$mount('#app')
