<template>
	<li  @mouseenter="itemEnter(true)" @mouseleave="itemEnter(false)" :style="{backgroundColor: Color}">
		<label>
			<input type="checkbox" v-model="todo.complate"/>
			<span>{{todo.title}}</span>
		</label>
		<button class="btn btn-danger" v-show="info" @click="deleteItem">删除</button>
	</li>
</template>

<script>
	export default {
		name: 'TodoItem',
		data() {
			return {
				info: false,
				Color: '#FFF'
			}
		},
		props: {
			todo: Object,
			deleteTodos: Function,
			index: Number
		},
		methods: { 
			itemEnter(isEnter) {
			if (isEnter) {
				this.info = true
				this.Color = '#DFDFDF'
			} else {
				this.info = false
				this.Color = '#FFF'
			}
		  },
		  deleteItem() {
			  const {index, deleteTodos} = this
			  deleteTodos(index)
		  }
		}
	}
</script>

<style>
	li {
	  list-style: none;
	  height: 36px;
	  line-height: 36px;
	  padding: 0 5px;
	  border-bottom: 1px solid #ddd;
	}
	
	li label {
	  float: left;
	  cursor: pointer;
	}
	
	li label li input {
	  vertical-align: middle;
	  margin-right: 6px;
	  position: relative;
	  top: -1px;
	}
	
	li button {
	  float: right;
	  margin-top: 3px;
	}
	
	li:before {
	  content: initial;
	}
	
	li:last-child {
	  border-bottom: none;
	}
</style>
