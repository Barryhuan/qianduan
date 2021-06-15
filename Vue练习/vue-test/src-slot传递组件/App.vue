<template>
	<div id="app">
	  <div class="todo-container">
	    <div class="todo-wrap">
			<TodoHeader :addTodos="addTodos"/>
			<TodoList :todos="todos" :deleteTodos="deleteTodos"/>
			<TodoFooter>
				<input type="checkbox" v-model="isAllCheck" slot="checkAll"/>
				<span slot="count">已完成{{computedSize}} / {{todos.length}}</span>
				<button class="btn btn-danger" v-show="computedSize" @click="deleteAllTodos" slot="delete">清除已完成任务</button>
			</TodoFooter>
		</div>
	  </div>
	</div>
</template>

<script>
	import TodoHeader from './components/TodoHeader'
	import TodoList from './components/TodoList'
	import TodoItem from './components/TodoItem'
	import TodoFooter from './components/TodoFooter'
	export default({
		name: 'App',
		data() {
			return {
				todos: JSON.parse(window.localStorage.getItem('todos_key') || '[]')
			}
		},
		methods: {
			addTodos(todo){
				this.todos.unshift(todo)
			},
			deleteTodos(index) {
				this.todos.splice(index, 1)
			},
			selectAllTodos(check) {
				this.todos.forEach(todo => todo.complate = check)
			},
			deleteAllTodos() {
				this.todos = this.todos.filter(todo => !todo.complate)
			}
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
		},
		watch: {
			todos: {
				deep: true,
				handler: function(value) {
					window.localStorage.setItem('todos_key', JSON.stringify(value))
				}
			}
		},
		components: {
			TodoHeader,
			TodoList,
			TodoItem,
			TodoFooter
		}
	})
</script>

<style>
	.todo-container {
	  width: 600px;
	  margin: 0 auto;
	}
	.todo-container .todo-wrap {
	  padding: 10px;
	  border: 1px solid #ddd;
	  border-radius: 5px;
	}
</style>
