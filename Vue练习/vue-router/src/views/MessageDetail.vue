<template>
    <div>
        <p>{{$route.params.id}}</p>
        <ul>
            <li>id: {{messageDetail.id}}</li>
            <li>title: {{messageDetail.title}}</li>
            <li>content: {{messageDetail.content}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {
            messageDetail: {}
        }
    },
    mounted () {
        setInterval(()=> {
                const allMessageDetail = [
                {
                    id: 1,
                    title: 'message0001',
                    content: 'message0001message0001message0001'
                },
                {
                    id: 2,
                    title: 'message0002',
                    content: 'message0002message0002message0002'
                },
                {
                    id: 4,
                    title: 'message0004',
                    content: 'message0004message0004message0004'
                }
            ]
            this.allMessageDetail = allMessageDetail
            const id = this.$route.params.id*1
            this.messageDetail = allMessageDetail.find(detail => detail.id === id)
        }, 1000)
    },
    watch: {
        $route: function (value) {
            const id = value.params.id * 1
            this.messageDetail = this.allMessageDetail.find(detail => detail.id === id)
        }
    }

}
</script>

<style scoped>

</style>