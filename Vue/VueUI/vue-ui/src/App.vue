<template>
  <div id="app">
    <mt-button type="primary" @click.native="handClick" style="width: 100%">primary</mt-button>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
import { Indicator } from 'mint-ui'
  export default({
    name: 'App',
    methods: {
      handClick() {
        Indicator.open('我正在数钱中。。。')
        setInterval(function() {
          Indicator.close()
      }, 1000)
      }
    }
  })
</script>

<style>

</style>
