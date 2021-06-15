<template>
	<div id="app">
	  <div class="todo-container">
	    <div class="todo-wrap">
			<TodoHeader :addTodos="addTodos"/>
			<TodoList :todos="todos"/>
			<TodoFooter :todos="todos" :selectAllTodos="selectAllTodos" :deleteAllTodos="deleteAllTodos"/>
		</div>
	  </div>
	</div>
</template>

<script>
	import PubSub from 'pubsub-js'
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
		mounted () {
			// 订阅消息
			PubSub.subscribe('deleteTodos', (msg, index) => {
				this.deleteTodos(index)
			})
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
