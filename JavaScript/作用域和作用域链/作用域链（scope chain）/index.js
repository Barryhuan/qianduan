//~ 作用域链涉及到执行上下文栈，执行上下文，变量对象
var a1 = 'global'
function f1() {
  var a2 = 'local'
  return a2
}
//* 函数有个[[scope]]属性，用来存储父级的变量对象，是一个父级变量对象组成的层级链，当创建函数时，会将父级的变量对象存储入到[[scope]]属性中, [[scope]]属性并不是完整的作用域链
//* 如果函数内包含另一个函数，则在执行上下文结束时将，内容函数创建时将父级函数的作用域复制到[[scope]]属性中
f1.[[scope]] = {
  globalVO // 全局执行上下文的变量对象
}

//* 当代码开始运行的时候会创建一个执行上下文栈，首先将全局执行上下文压进栈中
Stack = [
  globalContent
]

//* 遇到函数被调用的代码时，会将函数的执行上下文压入到栈中，开始了进入执行上下文阶段
Stack = [
  f1Content,
  globalContent
]
//* 初始化函数执行上下文，复制[[scope]]用来创建作用域
f1Content = {
  scopeChain: f1.[[scope]] (也就是globalVO)
}

//* 通过arguments属性创建变量对象，随后初始化变量对象，加入形参，变量声明以及函数声明
f1Content = {
  AO: {
    arguments: {
      length: 0
    },
    a2: undefined
  },
  scopeChain: [globalVO]
}
//* 将当前变量对象推入到作用域链的顶端
f1Content = {
  AO: {
    arguments: {
      length: 0
    },
    a2: undefined
  },
  scopeChain: [AO, globalVO]
}
//* 进入执行代码阶段，修改活动对象里的属性值
f1Content = {
  AO: {
    arguments: {
      length: 0
    },
    a2: 'local'
  },
  scopeChain: [AO, globalVO]
}

//* 函数执行上下文执行完后将从执行上下文中退出
Stack = [
  globalContent
]