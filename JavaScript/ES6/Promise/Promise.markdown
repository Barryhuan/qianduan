## Promise

### 定义
Promise本身是一个构造函数，它的实例是一个存储异步操作结果的容器（fulfilled and rejected）

### 特点
1. 对象的状态不会受外部的影响，一旦确认状态为什么，就无法改变。
Promise实例有三种状态：pending（未完成）fulfilled（成功）rejected（失败）
只有异步操作的结果会将promise的状态从pending转变：

2. 对象状态一旦改变就无法再次改变，任何时候得到的结果依旧是改变后的结果
成功：pending ===> fulfilled，那么promise的状态就是fulfilled
失败：pending ===> rejected，那么Promise的状态就是rejected

3. 对象一旦创建就会立即执行，在当前的同步任务中执行

### 优点
1. 解决了回调地狱的问题
2. 更好的进行错误捕获
3. 规范的链式写法，写出的代码可读性高，容易阅读理解
4. 提供了一整套的接口，可以实现许多功能

### 缺点
1. 无法中途取消。promise一旦创建就会立即执行，无法中途取消
2. 如果不设置回调函数，promise内部抛出错误，无法在外部得知（primise会吃掉错误）
3. 当promise处于pending的状态时，无法得知目前发展到哪个阶段

### 方法
1. Promise.prototype.then() 

2. Promise.prototype.catch()

3. Promise.prototype.finally()

4. Promise.all()

5. Promise.any()

6. Promise.race()

7. Promise.allSettled()

8. Promise.try()

9. Promise.resolve()

10. Promise.reject()