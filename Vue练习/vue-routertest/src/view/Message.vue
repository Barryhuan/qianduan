<template>
    <div>
        <ul>
           <li v-for="(msgs) in msg" :key="msgs.id">
               <router-link :to="`/home/message/messagedetail/${msgs.id}`">我的项目{{msgs.id}}</router-link>
               <button @click="pushShow(msgs.id)">Push查看</button>
               <button @click="replaceShow(msgs.id)">Replace查看</button>
           </li>
        </ul>
        <router-view></router-view>
        <hr/>
        <button @click="$router.back()">回退</button>
    </div>
</template>

<script>
export default {
   data () {
       return {
           msg: ''
       }
   },
   mounted () {
        setInterval( () => {
               const msg = [
                   {
                       id: 1,
                       title: '001'
                   },
                   {
                       id: 2,
                       title: '002'
                   },
                   {
                       id: 3,
                       title: '003'
                   }
               ]
                this.msg = msg
           }, 1000)
   },
   methods: {
       pushShow(id) {
           this.$router.push(`/home/message/messagedetail/${id}`)
       },
       replaceShow(id) {
           this.$router.replace(`/home/message/messagedetail/${id}`)
       }
   }
}
</script>

<style scoped>

</style>