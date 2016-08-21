<template lang="html">
  <div class="container-fluid m-a-1">
    <h1>event</h1>
    <button type="button" class="btn btn-outline-primary" @click="counter++">+1</button>
    <p>The button above has been clicked {{counter}} times</p>
    <p>
      <button type="button" class="btn btn-outline-primary" @click="greet">Greet</button>
      <button type="button" class="btn btn-outline-primary" @click="say('hi')">Say hi</button>
      <button type="button" class="btn btn-outline-primary" @click="say('what')">Say what</button>
      <button type="button" class="btn btn-outline-primary" @click="warn('Form cannot be submitted yet.', $event)">Submit</button>
    </p>
    <p>
      <a href="https://www.baidu.com" @click.prevent>baidu</a>
      <form @submit.prevent.stop></form>
      <div @click.self=""></div>
      <input type="text" class="ipt" @keyup.enter="say('enter')">
      <input type="text" class="ipt" @keyup.v="say('That is the first letter in Vue')">
    </p>
    <hr>
  </div>
</template>

<script>
export default {
  data () {
    return {
      counter: 0,
      name: 'zyy'
    }
  },
  methods: {
    greet () {
      alert(`Hello ${this.name}`)
    },
    say (msg) {
      alert(msg)
    },
    warn (msg, event) {
      if (event) {
        event.preventDefault()
      }
      alert(msg)
    }
  }
}
</script>
