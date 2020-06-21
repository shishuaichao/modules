
function sum (a, b) {
    return a + b
}

// 导出是个空对象
// exports = {
//     sum
// }   


// 导出时一个包含sum的对象  
// 因为module是nodejs上的一个对象，这样相当于往一个存在的对象上面添加属性
module.exports = {
    sum,
}