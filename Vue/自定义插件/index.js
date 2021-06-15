(function () {
	const myPlugin = {}
	myPlugin.install = function(Vue, options) {
		// 添加全局方法
		Vue.myGlobalMethod = function() {
			console.log('我在调用全局方法')
		}
		
		// 添加全局指令
		Vue.directive('myzhiling', function (el, binding) {
			console.log('我在调用自定义指令', binding)
		})
		
		// 添加实例方法
		Vue.prototype.$mymethod = function () {
			console.log('我在调用实例方法')
		}
	}
	window.myPlugin = myPlugin
})()