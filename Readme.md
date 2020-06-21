### 用法
- npm i anywhere -g
- anywhere 1234
### 说明
ECMAScript的官方语法，在浏览器端使用，主要用来解决js模块化的问题,
script上module属性可以用于模块隔离全局变量




### 主要用到export，import()，import  

+ export 导出  
    1. 直接导出 export default ，引入的时候可以自定义接收
    2. 对象导出 exprt { a: afun, b: bfun}

+ import 静态引入  必须放在含有type=module的script中才能生效，使用对象导出，有利于打包时的代码tree shaking


+ import() 动态引入  在普通的script就能生效，可以根据条件判断引入来实现动态加载模块的效果



### module.exports 和 exports 的区别
* module.exports = { mod1: 'xx', mod2: 'oo'}

* exports.mod1 = 'xxx'
* exports.mod2 = 'ooo'


```js
node
console.log(Module)
Module {
    id: '',
    parent: null,
    filename: '.....',
    ...
    exports: {},
}
```
> 打印一下node环境下的module我们会发现，modules.exports跟exports指向同一个内存地址，同一个对象
> 所不同的是，module.exports导出的是这个对象，而exports.xxx是导出这个对象中的某一个属性。



### require 是node环境中引入其他模块的方法
1. 引入其他js  
    - const mod1 = require('./mod/mod1.js')   // 全部导入
    - const { func1, func2 } = require('./mod/mod1.js')  // 按需导入
2. 引入其他模块 （这种引入会去当前文件夹下的node_modules中查找，如果找不到，就自动向外层去找，直到找到根目录中node_modules中的对应模块）
    - const lodash = require('lodash')
