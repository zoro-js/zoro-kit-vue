<template lang='html'>
  <div id='app'>
    Clicked: {{$store.state.count}} times, count is {{evenOrOdd}}
    <button type='button' class='btn' @click='increment'>+</button>
    <button type='button' class='btn' @click='decrement'>-</button>
    <button type='button' class='btn' @click='incrementIfOdd'>increment if odd</button>
    <button type='button' class='btn' @click='incrementAsync'> increment async</button>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'Counter',
  computed: mapGetters([
    'evenOrOdd'
  ]),
  methods: mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync'
  ])
}
</script>
