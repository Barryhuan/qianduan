<template>
    <ul>
        <li v-for="(news, index) in newsArr" :key="index">{{news}}</li>
    </ul>
</template>

<script>
export default {
    data () {
        return {
            newsArr: ['newsarr1', 'newsarr2', 'newsarr3']
        }
    }
}
</script>

<style scoped>

</style>