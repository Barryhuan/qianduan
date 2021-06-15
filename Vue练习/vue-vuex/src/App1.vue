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
  import {mapState, mapActions, mapGetters} from 'vuex'
  export default({
    computed: {
      ...mapGetters(['evenOrOdd']),
      ...mapState(['count'])
    },
    methods: {
      ...mapActions(['increment', 'decrement', 'incrementInfo', 'incrementAsync'])
    }
  })
</script>

<style>

</style>
