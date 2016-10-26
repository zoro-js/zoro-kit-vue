<template lang="html">
  <div class="container-fluid m-a-1 foo">
    <h1>foo</h1>
    <p>{{greeting}} world!</p>
    <hr>
  </div>
</template>

<script>
export default {
  data () {
    return {
      greeting: 'hello'
    }
  }
}
</script>

<style lang='css'>
  .foo {
    p {
      display: flex;
      color: silver;
    }
  }
</style>
