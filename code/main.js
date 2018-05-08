// hosting，提升
// console.log(a)
// var a = 1
// function a () {}
// console.log(a)

// 类数组
// var ao = {1:'a', 2:'b', length:3}
// var ar = Array.prototype.slice.apply(ao)
// var arr = Array.from(ao)
// console.log(ar)
// console.log(arr)




// 验证提升
// (function (a, b) {
//     console.log(a, b)
//     var a;
//     function b() {};
//     a = 1;
//     console.log(a, b)
// })(3, 4)

// (() => {
//     // 验证任务队列有没有插队的行为
//     // 先让主线程生成两个setTimeout和两个process.nextTick
//     setTimeout(() => {
//         console.log('timeout 1')
//         process.nextTick(() => {
//             console.log('process 3')
//         })
//         setTimeout(() => {
//             console.log('timeout 3')
//         })
//     });
//     setTimeout(() => {
//         console.log('timeout 2')
//     });
//     process.nextTick(() => {
//         console.log('process 1')
//         process.nextTick(() => {
//             console.log('process 4')
//         })
//         setTimeout(() => {
//             console.log('timeout 4')
//         })
//     });
//     process.nextTick(() => {
//         console.log('process 2')
//     });
// })()



// 验证箭头函数的this指向，在浏览器环境下测试通过
// var x = 'windows';
// function fun1() {
//     var fun2 = () => {
//         console.log(this.x)
//     }
//     fun2()
// }
// fun1();

// var obj = {
//     x: 'obj',
//     showX: fun1
// }
// obj.showX()

// function constructorDemo(x){
//     this.x = x
//     this.showX = () => {
//         console.log(this.x)
//     }
// }
// new constructorDemo('new').showX()


// 验证bind
// function list() {
//     console.log(this)
//     return Array.prototype.slice.call(arguments);
// }

// var f1 = list.bind(undefined,37);
// var f2 = f1.bind(undefined, 1, 2, 3);

// console.log(f1(4))
// console.log(f2(4,5))

// 验证暂时性死区
// var x = 0;
// function f(x = 2) {
//     console.log(x)
//     console.log(y)
//     let y = 1;
// }
// f()

