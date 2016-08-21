<template lang="html">
  <div class="container-fluid m-a-1">
    <div class="static" :class="{active: isActive, 'text-danger': hasError}">class object</div>
    <div :class="classObject">class - data object</div>
    <div :class="computedClassObject">class - computed object</div>
    <div :class="[activeClass, errorClass]">class array</div>
    <div :class="[isActive ? activeClass : '', errorClass]">class array with ternary</div>
    <div :class="[{active: isActive}, errorClass]">class array with object</div>
    <div :style="{color: activeColor, fontSize: fontSize + 'px'}">style object</div>
    <div :style="styleObject">style - data object</div>
    <div :style="computedStyleObject">style - computed object</div>
    <div :style="[baseStyles, overridingStyles]">style array</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isActive: true,
      hasError: false,
      classObject: {
        active: true,
        'text-danger': false
      },
      activeClass: 'active',
      errorClass: 'text-danger',
      activeColor: 'teal',
      fontSize: 30,
      styleObject: {
        color: 'teal',
        fontSize: '30px'
      },
      baseStyles: {
        color: 'teal',
        fontSize: '12px'
      },
      overridingStyles: {
        fontSize: '30px',
        fontWeight: 'bold'
      }
    }
  },
  computed: {
    computedClassObject () {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      }
    },
    computedStyleObject () {
      return {
        color: 'teal',
        fontSize: '30px'
      }
    }
  }
}
</script>
