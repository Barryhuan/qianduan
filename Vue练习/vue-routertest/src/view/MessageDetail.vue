<template>
    <div>
        <p>{{$route.params.id}}</p>
        <ul>
            <li>id：{{msgAll.id}}</li>
            <li>title：{{msgAll.title}}</li>
            <li>comment：{{msgAll.comment}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {
            msgAll: {}
        }
    },
    mounted () {
        setInterval(() => {
            const msgcopy = [
                {
                    id: 1,
                    title: 'title1',
                    comment: 'comment1'
                },
                {
                    id: 2,
                    title: 'title2',
                    comment: 'comment2'
                },
                {
                    id: 3,
                    title: 'title3',
                    comment: 'comment3'
                }
            ]
            this.msgcopyxx = msgcopy
            const id = this.$route.params.id * 1
            this.msgAll = this.msgcopyxx.find((item) => item.id === id)
        })
    },
    watch: {
        $route: function (vue) {
            const id = vue.params.id * 1
            this.msgAll = this.msgcopyxx.find((item) => item.id === id)
        }
    }
}
</script>

<style scoped>

</style>