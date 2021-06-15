<template>
    <div>
        <h2>About</h2>
        <p>{{msg}}</p>
        <input type="text"/>
    </div>
</template>
<script>
export default {
    props: {
        msg: {
            type: String,
            required: true,
            default: ''
        }
    }
}
</script>

<style scoped>

</style>s