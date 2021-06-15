<template>
    <div class="container">
        <Search/>
        <user-main/>   
    </div>
</template>

<script>
    import Search from './components/Search'
    import Main from './components/Main'
    export default ({
        components: {
            Search,
            UserMain: Main
        }
    })
</script>

<style scoped>

</style>