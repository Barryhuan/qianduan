<template>
  <div>
    <router-link to="/b/cc">b</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  }
}
</script>
<style scoped>
  .router-link-active{
    color: red;
  }
</style>