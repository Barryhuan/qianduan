<template>
	<li class="item">
		<h5 class="item-h5"><span>{{comment.name}}</span>说：</h5>
		<p>{{comment.content}}</p>
		<a href="###" class="delete" @click="deleItem">删除</a>
	</li>
</template>

<script>
	export default {
		name: 'Item',
		props: ['comment', 'deleteComments', 'index'],
		methods: {
			deleItem() {
				const {comment, deleteComments, index} = this
				if (window.confirm(`是否确定删除${	comment.name}`)) {
					deleteComments(index)
				}
			}
		}
	}
</script>

<style>
	.item {
		width: 480px;
		height: 60px;
		border: 1px solid #dfdfdf;
		padding: 10px;
		position: relative;
	}
	h5 {
		margin: 10px 0;
	}
	.item-h5 {
		margin: 5px 0;
	}
	p {
		padding-left: 40px;
	}
	.delete {
		position: absolute;
		top: 0;
		right: 5px;
		border: 1px solid #dfdfdf;
		text-decoration: none;
		color: blue;
	}
</style>
