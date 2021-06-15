<template>
    <div>
        <h2 v-if="firstView">输入用户名搜索</h2>
        <h2 v-if="loading">loading</h2>
        <h2 v-if="errorMsg">{{errorMsg}}</h2>
        <div class="row">
            <div class="card" v-for="(user, index) in users" :key="index">
                <a :href="user.url" target="_blank">
                <img :src="user.avatar_url" style='width: 100px'/>
                </a>
                <p class="card-text">{{user.name}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import PubSub from 'pubsub-js'
import axios from 'axios'
export default {
    name: 'Main',
    data() {
        return {
            firstView: true,
            loading: false,
            users: null,
            errorMsg: ''
        }
    },
    mounted() {
        PubSub.subscribe('search', (msg, searName) => {
            const url = `https://api.github.com/search/users?q=${searName}`
            this.firstView = false
            this.loading = true
            this.users = null
            this.errorMsg = ''

            axios.get(url).then(
                response => {
                    const userObject = response.data
                    const users = userObject.items.map(item => {
                        return {
                            url: item.html_url,
                            avatar_url: item.avatar_url,
                            name: item.login
                        }
                    })
                    this.loading = false
                    this.users = users
                }
            ).catch(
                error => {
                    this.loading = false
                    this.errorMsg = '请求失败！！！'
                }
            )
        })
    }
}
</script>

<style scoped>
    .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
    }

    .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
    }

    .card-text {
    font-size: 85%;
    }
</style>