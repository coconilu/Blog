// 验证事件循环机制
// setTimeout(() => {
//     console.log('timeout 1')
//     Promise.resolve().then(() => {
//         console.log('Promise 3')
//     })
//     setTimeout(() => {
//         console.log('timeout 3')
//     })
//     setImmediate(() => {
//         console.log('immediate 3')
//     })
// })

// setImmediate(() => {
//     console.log('immediate 1')
// })

// Promise.resolve().then(() => {
//     console.log('Promise 1')
//     Promise.resolve().then(() => {
//         console.log('Promise 2')
//     })
//     setTimeout(() => {
//         console.log('timeout 2')
//     })
//     setTimeout(() => {
//         console.log('timeout 4')
//     })
//     setTimeout(() => {
//         console.log('timeout 5')
//     })
//     setImmediate(() => {
//         console.log('immediate 2')
//         setTimeout(() => {
//             console.log('timeout 6')
//         })
//     })
// })

// 更新UI机制
// var testTitle = document.getElementById('testTitle')

// setTimeout(()=>{
//     testTitle.textContent = 'wangyaohui'
//     var t = +new Date();
//     while(+new Date() - t < 3000) ;
// })

// 验证任务队列的执行逻辑
// process.nextTick(()=>{
//     console.log('process 1')
// })

// setTimeout(()=>{
//     console.log('setTimeout 1')
//     process.nextTick(()=>{
//         console.log('process 2')
//         setTimeout(()=>{
//             console.log('setTimeout 4')
//         })
//     })
// })

// setTimeout(()=>{
//     console.log('setTimeout 2')
//     process.nextTick(()=>{
//         console.log('process 4')
//         setTimeout(()=>{
//             console.log('setTimeout 5')
//         })
//     })
// })

// setTimeout(()=>{
//     console.log('setTimeout 3')
// })

// process.nextTick(()=>{
//     console.log('process 3')
// })


// 验证任务阻塞setTimeout执行的情况
// 结果相差
// var d1, d2, d3, d4
// console.log(d1 = new Date())
// setTimeout(() => {
//     console.log(d2 = new Date())
//     var d;
//     setTimeout(() => {
//         console.log(d3 = new Date())
//     }, 1000)
//     d = +new Date();
//     while (+new Date() - d < 3000);// 延迟3秒
//     console.log(d4 = new Date())
// }, 1000)

// 验证setInterval的覆盖情况，nodejs
// console.log(new Date())
// setTimeout(() => {
//     var d, num = 0;
//     setInterval(() => {
//         var dd;
//         console.log(new Date())
//         console.log(num)
//         ++num
//         dd = +new Date();
//         while (+new Date() - dd < 2000);// 延迟3秒
//     }, 1000)
//     d = +new Date();
//     while (+new Date() - d < 3000);// 延迟3秒
// })

// 验证setInterval的覆盖情况，浏览器环境
(function inter(num) {
    setInterval(() => {
        var t = +new Date();
        ++num;
        console.log(num, new Date());
        while (+new Date() - t < 1000); // 阻塞两秒
    }, 2000)
})(0)



// 异步编程，优先级测试
// setImmediate(function(){
//     console.log(1);
// },0);
// setTimeout(function(){
//     console.log(2);
// },0);
// new Promise(function(resolve){
//     console.log(3);
//     resolve();
//     console.log(4);
// }).then(function(){
//     console.log(5);
// });
// console.log(6);
// process.nextTick(function(){
//     console.log(7);
// });
// console.log(8);

// 疑惑中
// console.log('script start');

// setTimeout(function() {
//     console.log('setTimeout');
// }, 0);

// Promise.resolve().then(function(resolve) {
//     console.log('promise1');
//     setTimeout(function() {
//         console.log('setTimeout in microtask');
//     }, 0);
// }).then(function() {
//     console.log('promise2');
// });

// console.log('script end');

// 疑惑中

// setTimeout(() => {
//     console.log('timeout');
// });
// setImmediate(() => {
//     console.log('immediate');
// });

// const fs = require('fs');
// fs.readFile(__filename, () => {
//     setTimeout(() => {
//         console.log('timeout');
//     });
//     setImmediate(() => {
//         console.log('immediate');
//     });
// });

