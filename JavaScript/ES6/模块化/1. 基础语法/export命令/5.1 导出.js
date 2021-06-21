//~ 如果想在一条import语句中，同时输入默认方法和其他接口，可以写成下面这样

export default function () {
}

export function each() {
}

export { each as forEach }
// 最后一行的意思是，暴露出forEach接口，默认指向each接口，即forEach和each指向同一个方法