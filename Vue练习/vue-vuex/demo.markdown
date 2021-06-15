## Vuex(状态管理模式)
1. 什么是Vuex
   定义：Vuex是专门用于Vue程序的状态管理模式
   作用：Vuex是集中式存储管理多个组件的共享状态，并以一种相应的规则保证状态的以可以预测的方式发生变化
   简单定义：Vuex其实就是对Vue程序的多个组件的共享状态进行集中式的管理（也就是进行读取/写入）

2. 状态管理应用(vue应用)
   state：驱动应用的数据源 vue实例里的data属性
   view: 以声明的方式将state映射在视图 {{data}}}：大括号表达式
   action: 响应在View上用户输入导致的状态变化（n个事件方法响应） methods里的方法

3. 示例图
   ![状态自管理应用](F:\前端\练习\Vue练习\vue-vuex\static\flow.png)

   特点：是一个单项数据流 State -> View -> Actions
   分类：初始(State -> View) || 更新 (View -> Actions -> state -> View)

4. 当遇到多个组件的共享状态问题时，单项数据流的简洁性容易被破坏
   1. 多个视图依赖于同一状态
   2. 来自不同视图的行为(methods)变更同一状态
   3. 以前的解决方法：
       * 方法1：传参的方法对于多层嵌套的组件将会非常繁琐，并且对于兄弟组件间的状态传递无能为力
       * 方法2：采用父子组件直接引用或者通过事件来变更和同步状态的多份拷贝
       * 问题：以上的方法都是将数据和操作数据的行为都放在父组件，传递需要层层传递，无法维护代码
       * Vuex就是用来解决这些问题的
5. Vuex
   * 安装
     npm install vuex --save
   * 使用
     1. 创建store.js
     2. 在main.js里映射Store
     3. App里的运用
   * 结构
     1. State对象
     2. Actions对象
     3. Mutations对象
     4. Getters对象

6. 示例图

   ![vuex](F:\前端\练习\Vue练习\vue-vuex\static\vuex.png)