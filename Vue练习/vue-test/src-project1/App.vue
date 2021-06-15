<template>
	<div id="app">
		<div class="app_h1">
			<h1>请发表对Vue的评论</h1>
		</div>
		<div class="app_2">
			<Add :addComments="addComments"/>
			<List :comments="comments" :deleteComments="deleteComments"/>
		</div>
	</div>
</template>

<script>
	import Add from './components/Add'
	import List from './components/List'
	export default({
		name: 'App',
		data() {
			return {
				comments: [
					{
						name: '用户1',
						content: '我是用户1'
					},
					{
						name: '用户2',
						content: '我是用户2'
					},
					{
						name: '用户3',
						content: '我是用户3'
					}
				]
			}
		},
		methods: {
			addComments(comments) {
				this.comments.unshift(comments)
			},
			deleteComments(index) {
				this.comments.splice(index, 1)
			}
		},
		components: { Add, List }
	})
</script>

<style>
	body, ul, ol, li, h1, h2, h3, h4, h5, h6, p{
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.app_h1 {
		width: 100%;
		text-align: left;
		background-color: rgb(237, 238, 236);
	}
	.app_h1 h1{
		width: 1200px;
		margin: 0 auto;
		height: 200px;
		line-height: 200px;
		font-size: 50px;
	}
	.app_2 {
		width: 1200px;
		margin: 10px auto;
		position: relative;
	}
</style>
