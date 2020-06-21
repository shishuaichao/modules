

let sumMod = require('./modules/sumMod.js')  // 去路径中找
let $ = require('jquery')  // 去根目录下的node_modules中去找对应的文件夹 
let { car, house } = require('car-house')

console.log(sumMod)

console.log(module.exports)

console.log(exports)

console.log(module)

console.log($)

console.log(car, house)



