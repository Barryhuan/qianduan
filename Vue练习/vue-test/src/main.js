import Vue from 'vue'
import App from './App'
import './base.css'
new Vue({
	el: '#app',
	components: { App },
	template: '<App/>'
})

// 简化写法

new Vue({
	el: '#app',
	render: h => h(App)
})

// 完整写法
new Vue({
	el: '#app',
	render: function (createElement) {
		return createElement(App)
	}
})

// 1.render函数是什么
// vue是通过HTML模板语法来创建虚拟DOM的，但是需要一个函数来将模板语法转化为虚拟DOM，
// 而render是一个js用来创建虚拟的DOM的函数，免去了vue需要一个函数来转化为虚拟DOM
// render有一个转化工具，也就是一个函数，叫作CreateElement函数，用来转化虚拟DOM
// CreateElment也叫h或者_c
// CreateElment有三个参数，分别是

// @returns {VNode}
createElement(
	// {String | Object | Function}
	// 一个 HTML 标签字符串，组件选项对象，或者
	// 解析上述任何一种的一个 async 异步函数，必要参数。
	'div',

	// {Object}
	// 一个包含模板相关属性的数据对象
	// 这样，您可以在 template 中使用这些属性。可选参数。
	{
		// (详情见下一节)
	},

	// {String | Array}
	// 子节点 (VNodes)，由 `createElement()` 构建而成，
	// 或使用字符串来生成“文本节点”。可选参数。
	[
		'先写一些文字',
		createElement('h1', '一则头条'),
		createElement(MyComponent, {
			props: {
				someProp: 'foobar'
			}
		})
	]
)

// 2.render函数怎么用
render: (h) => {
	return h('div', {
		//给div绑定value属性
		props: {
			value: ''
		},
		//给div绑定样式
		style: {
			width: '30px'
		},
		//给div绑定点击事件　　
		on: {
			click: () => {
				console.log('点击事件')
			}
		},

	})
}    