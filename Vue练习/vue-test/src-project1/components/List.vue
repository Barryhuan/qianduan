<template>
	<div class="list">
		<h5>评论回复：</h5>
		<h3 v-show="comments.length === 0">暂无评论，请点击左侧添加评论！！！</h3>
		<ul class="list-content">
			<Item v-for="(comment, index) in comments" :key="index" :comment="comment" :deleteComments="deleteComments" :index="index"/>
		</ul>
	</div>
</template>

<script>
	import Item from './Item'
	export default {
		name: 'List',
		props: ['comments', 'deleteComments'],
		components: { Item }
	}
</script>

<style>
	ul,li{
		padding: 0;
		margin: 0;
		list-style: none;
	}
	.list {
		width: 480px;
		position: absolute;
		right: 0;
		top: 0;
	}

</style>
