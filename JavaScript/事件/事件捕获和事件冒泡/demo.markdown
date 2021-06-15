## 事件冒泡和事件捕获（事件流）

### 事件冒泡

事件冒泡是微软提出的一种事件流处理机制，把处理事件比喻为石子掉入水中，往上冒一个个小泡泡，从目标事件对象开始，往document根对象出发。
一般的事件触发就是按照冒泡事件机制处理的，主要是很多浏览器都兼容事件冒泡

### 事件捕获
事件捕获是Ne提出来的一种事件处理流机制，把处理事件从document根对象开始一步步往目标对象出发。

### 事件处理机制的三大阶段
1. 捕获阶段
2. 处理目标对象的事件程序
3. 冒泡阶段

### 特点
1. 事件冒泡可以通过平常的事件触发直接执行，而事件捕获需要通过event对象的addEventListener()方法才可以调用
    * 事件冒泡：addEventListener（事件，处理函数，false），false是默认值
    * 事件捕获：addEventListener（事件，处理函数，true）
2. 事件处理的三大阶段
    * 第一阶段捕获阶段，当离目标阶段的更高层次的节点也注册了捕获事件时，则会先调用
    * 第二阶段处理目标对象的事件程序时，如果同时存在冒泡事件和捕获事件时，按照事件注册的顺序来执行
    * 第三阶段冒泡阶段，当执行完目标对象的事件后，会往上执行更高层次的节点的冒泡事件
    * 实例代码（参考本文件夹里的HTML文件）：

            s1.addEventListener("click", function (
                alert("我是s1的事件捕获")
            ) {}, true)

            s2.addEventListener("click", function () {
                alert("我是s2的事件捕获")
            }, true)

            s2.addEventListener("click", function () {
                alert("我是s2的事件冒泡")
            }, false)
            s1.addEventListener("click", function () {
                alert("我是s1的事件冒泡")
            }, false)

### 事件代理
原本需要为ul下的所有的li注册事件的，但是通过事件代理可以减少很多重复的代码，优化程序，提高性能
参考事件代理的HTML的文档

### 关于事件冒泡的事件
* onmouseover and onmouseout ：支持事件冒泡
    * onmouseover and onmouseout事件会在当前元素对象进入或离开的时候触发，即使是进入自己的子元素也会触发onmouseout事件，当从子元素进入父元素时，又会触发onmouseover事件
* onmouseenter and onmouseleave: 不支持事件冒泡
    * onmouseenter and onmouseleave事件只会在进入或离开当前元素对象的情况下触发，即使是进入自己的子元素或者子元素进入父元素的情况下也不会触发

### 关于event.target和event.currentTarget
* target是当前的目标对象
* currentTarget是事件绑定的对象
* 事件代理中，target是当前的子元素，而currentTarget指的是当前子元素的父元素