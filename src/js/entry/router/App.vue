<template lang='html'>
  <div id='app'>
    <h1>Vue Router</h1>
    <h5>Basic</h5>
    <ul>
      <li><router-link to='/'>/</router-link></li>
      <li><router-link to='/foo'>/foo</router-link></li>
      <li><router-link to='/bar'>/bar</router-link></li>
    </ul>
    <hr>
    <h5>Nested</h5>
    <ul>
      <li><router-link to='/parent'>/parent</router-link></li>
      <li><router-link to='/parent/foo'>/parent/foo</router-link></li>
      <li><router-link to='/parent/bar'>/parent/bar</router-link></li>
      <li><router-link to='/baz'>/baz</router-link></li>
    </ul>
    <hr>
    <h5>Named Routes</h5>
    <p>Current route name: {{$route.name}}</p>
    <ul>
      <li><router-link :to='{name:"home"}'>home</router-link></li>
      <li><router-link :to='{name:"foo"}'>foo</router-link></li>
      <li><router-link :to='{name:"bar"}'>bar</router-link></li>
    </ul>
    <hr>
    <h5>Named Views</h5>
    <ul>
      <li><router-link to='/named-views'>/named-views</router-link></li>
    </ul>
    <hr>
    <h5>matching</h5>
    <ul>
      <li><router-link to='/'>/</router-link></li>
      <li><router-link to='/params/foo/bar'>/params/foo/bar</router-link></li>
      <li><router-link to='/optional-params'>/optional-params</router-link></li>
      <li><router-link to='/optional-params/foo'>/optional-params/foo</router-link></li>
      <li><router-link to='/params-with-regex/123'>/params-with-regex/123</router-link></li>
      <li><router-link to='/params-with-regex/abc'>/params-with-regex/abc</router-link></li>
      <li><router-link to='/asterisk/foo'>/asterisk/foo</router-link></li>
      <li><router-link to='/asterisk/foo/bar'>/asterisk/foo/bar</router-link></li>
      <li><router-link to='/optional-group/bar'>/optional-group/bar</router-link></li>
      <li><router-link to='/optional-group/foo/bar'>/optional-group/foo/bar</router-link></li>
    </ul>
    <p>Route context</p>
    <pre class='route'>{{route}}</pre>
    <hr>
    <h5>active link</h5>
    <ul>
      <li><router-link to='/'>/</router-link></li>
      <li><router-link to='/' exact>/ (exact match)</router-link></li>
      <li><router-link to='/users'>/users</router-link></li>
      <li><router-link to='/users' exact>/users (exact match)</router-link></li>
      <li><router-link to='/users/evan'>/users/evan</router-link></li>
      <li><router-link to='/users/evan#foo'>/users/evan#foo</router-link></li>
      <li>
        <router-link :to='{path: "/users/evan", query: {foo: "bar"}}'>
          /users/evan?foo=bar
        </router-link>
      </li>
      <li>
        <router-link :to='{path: "/users/evan", query: {foo: "bar", baz: "qux"}}'>
          /users/evan?foo=bar&baz=qux
        </router-link>
      </li>
      <li><router-link to='/about'>/about</router-link></li>
      <router-link tag='li' to='/about'>
        <a>/about (active class on outer element)</a>
      </router-link>
    </ul>
    <hr>
    <h5>redirect</h5>
    <ul>
      <li><router-link to='/parent/relative-redirect'>
        /relative-redirect (redirects to /parent/foo)
      </router-link></li>
      <li><router-link to='/parent/relative-redirect?foo=bar'>
        /relative-redirect?foo=bar (redirects to /parent/foo)
      </router-link></li>
      <li><router-link to='/absolute-redirect'>
        /absolute-redirect (redirects to /parent/bar)
      </router-link></li>
      <li><router-link to='/named-redirect'>
        /named-redirect (redirects to /parent)
      </router-link></li>
      <li><router-link to='/redirect-with-params/123'>
        /redirect-with-params/123 (redirects to /parent/with-params/123)
      </router-link></li>
      <li><router-link to='/not-found'>
        /not-found (redirects to /)
      </router-link></li>
    </ul>
    <hr>
    <h5>alias</h5>
    <ul>
      <li><router-link to='/parent-foo'>
        /parent-foo (renders /parent/foo)
      </router-link></li>
      <li><router-link to='/parent/bar-alias'>
        /parent/bar-alias (renders /parent/bar)
      </router-link></li>
      <li><router-link to='/parent-baz'>
        /parent-baz (renders /baz)
      </router-link></li>
      <li><router-link to='/parent/baz-alias'>
        /parent/baz-alias (renders /baz)
      </router-link></li>
    </ul>
    <h1>router-view</h1>
    <div class='views'>
      <router-view class='default'></router-view>
      <router-view class='a' name='a'></router-view>
      <router-view class='b' name='b'></router-view>
    </div>
  </div>
</template>

<script>
import util from 'util'

export default {
  data () {
    return {
    }
  },
  computed: {
    route () {
      return util.inspect(this.$route)
    }
  }
}
</script>
