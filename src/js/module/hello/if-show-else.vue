<template lang="html">
  <div class="container-fluid m-a-1">
    <h1>if show else</h1>
    <p v-if="ok">ok</p>
    <p v-if="even">even</p>
    <p v-else>odd</p>
    <template v-if="ok">
      <p>Title</p>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </template>
    <p v-show="ok">ok</p>
    <p v-show="even">even</p>
    <p v-show="!even">odd</p>
    <hr>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ok: true,
      even: false
    }
  }
}
</script>
