<template>
  <div id="app">
    <!-- 123123 -->
    <input type="text" v-model="inputVal.a" v-focus>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      inputVal: {
        a: 1,
        b: 2
      }
    }
  },
  mounted() {
    console.log(this.aaa)
  },
  filters: {
    toUpperCase(val, ...args) {
      console.log(this)
      console.log(val)
      console.log(args)
      console.log('大写')
    }
  },
  comments: true
}
</script>

<style lang="less">
</style>
