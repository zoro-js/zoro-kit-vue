<template lang="html">
  <div class="container-fluid m-a-1">
    <h1>form</h1>
    <p>
      <input type="text" class="ipt" v-model="msg" placeholder="enter message">
      Message is: {{msg}}
    </p>
    <p>
      <textarea v-model="text" placeholder="enter text"></textarea>
      <p>Text is:</p>
      <p :style="{whiteSpace:'pre'}">{{text}}</p>
    </p>
    <p>
      <label><input type="checkbox" class="ipt" v-model="checked"> {{checked}}</label>
      <label><input type="checkbox" class="ipt" v-model="checkeds" value="Apple"> Apple</label>
      <label><input type="checkbox" class="ipt" v-model="checkeds" value="Boy"> Boy</label>
      <label><input type="checkbox" class="ipt" v-model="checkeds" value="Cat"> Cat</label>
      <label><input type="checkbox" class="ipt" v-model="checkeds" value="Dog"> Dog</label>
      checkeds is: {{checkeds}}
    </p>
    <p>
      <label><input type="radio" class="ipt" v-model="picked" value="one"> one</label>
      <label><input type="radio" class="ipt" v-model="picked" value="two"> two</label>
      picked is: {{picked}}
    </p>
    <p>
      <select v-model="selected">
        <option value="a">a</option>
        <option value="b">b</option>
        <option value="b">c</option>
        <option v-for="option in options" :value="option.value">{{option.text}}</option>
      </select>
      selected is: {{selected}}
      <select v-model="selecteds" multiple>
        <option value="a">a</option>
        <option value="b">b</option>
        <option value="c">c</option>
      </select>
      selecteds is: {{selecteds}}
    </p>
    <hr>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '',
      text: '',
      checked: false,
      checkeds: [],
      picked: '',
      selected: '',
      options: [
        {text: 'one', value: 1},
        {text: 'two', value: 2},
        {text: 'three', value: 3}
      ],
      selecteds: []
    }
  }
}
</script>
