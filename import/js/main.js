
console.log('mod1--------------')
import mod1 from '/modules/mod1.js'
console.log(mod1.sum(2, 3))
console.log(mod1.sub(3, 2))


console.log('mod2--------------')
import { sum, sub } from '/modules/mod2.js'
console.log(sum(2, 3))
console.log(sub(3, 2))


// 关于vue中直接引入模块的问题，本地测试无效，因为require 是node的语法，
import { car } from 'jquery'

console.log(car)



