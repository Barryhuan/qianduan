<template>
    <ul>
        <li v-for="(value, index) in newlist" :key="index">{{value}}</li>
    </ul>
</template>

<script>
export default {
    data () {
        return {
            newlist: ['news1', 'news2', 'news3']
        }
    }
}
</script>

<style scoped>

</style>