<template>
  <div id="app">
    <p>click {{$store.state.count}} times, count is {{evenOrOdd}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementInfo">increment if odd</button>
    <button @click="incrementAsync">increment asyn</button>
  </div>
</template>

<script>
  export default({
    computed: {
      evenOrOdd () {
        return this.$store.getters.evenOrOdd
      }
    },
    methods: {
      increment () {
        this.$store.dispatch('increment')
      },
      decrement () {
        this.$store.dispatch('decrement')
      },
      incrementInfo () {
        this.$store.dispatch('incrementInfo')
      },
      incrementAsync () {
        this.$store.dispatch('incrementAsync')
      }
    }
  })
</script>

<style>

</style>
