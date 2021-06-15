<template>
<div class="todo-footer">
	<label>
	   <input type="checkbox" v-model="isAllCheck"/>
	</label>
	<span>
	  <span>已完成{{computedSize}}</span> / {{todos.length}}
	</span>
	<button class="btn btn-danger" v-show="computedSize" @click="deleteAllTodos">清除已完成任务</button>
</div>
</template>

<script>
	export default {
		name: 'TodoFooter',
		props: {
			todos: Array,
			selectAllTodos: Function,
			deleteAllTodos: Function
		},
		computed: {
			computedSize() {
				return this.todos.reduce((pretodo, todo) => pretodo + (todo.complate ? 1 : 0), 0)
			},
			isAllCheck: {
				get() {
					return this.computedSize === this.todos.length && this.computedSize > 0
				},
				set(value) {
					this.selectAllTodos(value)
				}
			}
		}
	}
</script>

<style>
	.todo-footer {
	  height: 40px;
	  line-height: 40px;
	  padding-left: 6px;
	  margin-top: 5px;
	}
	
	.todo-footer label {
	  display: inline-block;
	  margin-right: 20px;
	  cursor: pointer;
	}
	
	.todo-footer label input {
	  position: relative;
	  top: -1px;
	  vertical-align: middle;
	  margin-right: 5px;
	}
	
	.todo-footer button {
	  float: right;
	  margin-top: 5px;
	}
</style>
