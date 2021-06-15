<template>
	<div id="app">
	  <div class="todo-container">
	    <div class="todo-wrap">
			<TodoHeader/>
			<TodoList/>		
			<TodoFooter/>
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
