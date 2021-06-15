<template>
    <div id="app">
        <p v-if="!repoUrl">loading</p>
        <p v-else>most star repo is <a :href="repoUrl">{{repoName}}</a></p>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data () { 
        return {
            repoUrl: '',
            repoName: ''
        }
    },
    mounted () {
        const url = 'https://api.github.com/search/repositories?q=v&sort=stars'
        // resource的请求方法

        // this.$http.get(url).then(
        //     response => {
        //         var reponseObject = response.data
        //         var reponseItem = reponseObject.items[0]
        //         this.repoUrl = reponseItem.html_url
        //         this.repoName = reponseItem.name
        //     },
        //     error => {
        //         alert('请求失败！！！')
        //     }
        // )

        // axios的请求方法
        console.log(axios.get)
        console.log(url)
        axios.get(url).then(
            response => {
                var reponseObject = response.data
                var reponseItem = reponseObject.items[0]
                this.repoUrl = reponseItem.html_url
                this.repoName = reponseItem.name
            }).catch(
                error => {
                    alert('请求失败！！！')
                }
            )
    }
}
</script>

<style scoped>

</style>