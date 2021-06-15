<template>
	<div class="add">
		<h4>用户姓名</h4>
		<input type="text" placeholder="用户姓名" class="userName" v-model="name"/>
		<h4>评论内容</h4>
		<textarea rows="6" cols="20" placeholder="评论内容" class="userContetn" v-model="content"/><br/>
		<button @click="add">提交</button>
	</div>
</template>

<script>
	export default {
		name: 'add',
		props:['addComments'],
		data() {
			return {
				name: '',
				content: ''
			}
		},
		methods: {
			add() {
				const name = this.name.trim()
				const content = this.content.trim()
				if ( !name || !content) {
					alert('账号或密码不能为空')
					return
				}
				const comment = {
					name,
					content
				}
				this.addComments(comment)

				this.name = ''
				this.content = ''
			}
		}
	}
</script>

<style>
	h4, input, textarea {
		margin: 0;
		padding: 0;
	}
	.add {
		width: 425px;
		position: absolute;
		top: 0;
		left: 0;
	}
	input {
		width: 400px;
		height: 25px;
		padding: 10px;
		margin-bottom: 20px;
		border-radius: 5px;
	}
	textarea {
		width: 400px;
		padding: 10px;
		height: 200px;
		border-radius: 10px;
	}
	h4 {
		margin: 5px 0;
	}
	.userName {
		border: 1px solid #000;
	}
</style>