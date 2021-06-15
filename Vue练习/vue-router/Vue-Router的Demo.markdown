#Vue-Router
### Vue-Router的安装

npm install vue-router --save

也可以在利用vue-cli脚手架的时候安装

### Vue-Router的使用

在src里创建一个router的文件夹，里面有index.js文件夹

### Vue-Router的index.js

已经在index.js文件里写好了顺序

### main.js里的VueRouter
已经在main.js文件里写好了

### Vue-Router在页面中的使用

1. 组件
   <router-link to='/about'></router-link> // 点击跳转到指定的路由，也可以传递参数给路由，类似于a标签
   <router-link :to='`/about/$(msg.id)`'> // 这里的to已经是绑定的了，同时在index.js文件里要给指定的路由路径添加占位符，例如：path: '/about/:id',这样就会把id存储到$route.params对象里，成为它的一个属性


   <router-view></router-view> // 显示当前视图，也就是说在同一个页面，点击router-link时，router-view就会显示要跳转的组件页面了
   <router=view :msg="123"></router-view> // 同时也可以传递参数到指定的页面上，在指定的页面上组件对象里使用props属性进行调用

   <keep-alive>
       <router-view></router-view>         // <keep-alive> 用来缓存当前的路由数据，这件就不会再切换路由时当前路由数据清空了
   </keep-alice>  

   
2. vue-router的属性
   * $route属性
      $route里有一个params对象用来存储传入路由的参数，比如上面在<router-link>里传入的id属性
   * $router属性
      1. push（path） // 相当于点击路由链接跳转，可以回到原页面
      2. replace（path）// 新路由替换老路由，不可以回到原页面
      3. back() // 相当于路由的退后