<template>
	<div class="todo-header">
	  <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.13="addItem" v-model="title"/>
	</div>
</template>

<script>
	export default {
		name: 'TotoHeader',
		data() {
			return {
				title: '',
				complate: false
			}
		},
		methods: {
			addItem() {
				const title = this.title.trim()
				const complate = this.complate
				if (!title) {
					alert('输入不能为空')
					return
				}
				const todos = {
					title,
					complate
				}
				// 自定义事件的触发
				this.$emit('addTodos', todos)
				this.title = ''
				this.complate = ''
			}
		}
	}
</script>

<style>
	.todo-header input {
	  width: 560px;
	  height: 28px;
	  font-size: 14px;
	  border: 1px solid #ccc;
	  border-radius: 4px;
	  padding: 4px 7px;
	}
	
	.todo-header input:focus {
	  outline: none;
	  border-color: rgba(82, 168, 236, 0.8);
	  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
	}
</style>
