<template lang="html">
  <button type="button" class="btn btn-outline-primary" @click="counter++">{{counter}}</button>
</template>

<script>
export default {
  data () {
    return {
      counter: 0
    }
  }
}
</script>
