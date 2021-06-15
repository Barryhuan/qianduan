<template>
    <div>
        <ul>
            <li v-for="(msgs) in msg" :key="msgs.id">
                <router-link :to="`/home/message/detail/${msgs.id}`">MessageDetail</router-link>
                <button @click="pushShow(msgs.id)">push查看</button>
                <button @click="ReplaceShow(msgs.id)">Replace查看</button>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: ''
        }
    },
    mounted() {
        setInterval(()=> {
            const msg = [
                {
                    id: 1,
                    title: 'msg0001'
                },
                {
                    id: 2,
                    title: 'msg0002'
                },
                {
                    id: 4,
                    title: 'msg0004'
                },
            ]
            this.msg = msg
        }, 1000)
    },
    mothods: {
        pushShow(id) {
            
        }
    }
}
</script>

<style scoped>

</style>