// function* genDemo() {
//  console.log(" 开始执行第一段 ")
//  yield 'generator 1'
//  console.log(" 开始执行第二段 ")
//  yield 'generator 2'
//  console.log(" 开始执行第三段 ")
//  return 'generator 3'
// }
// console.log('main 0')
// let gen = genDemo()
// console.log(gen.next().value)
// console.log('main 1')
// console.log(gen.next().value)
// console.log('main 2')
// console.log(gen.next().value)
// console.log('main 3')

// function fetch(url) {
//     return Promise.resolve(url)
// }

// function* foo() {
//      let response1 = yield fetch('https://www.geekbang.org')
//     console.log('response1')
//     console.log(response1)
//     let response2 = yield fetch('https://www.geekbang.org/test')
//     console.log('response2')
//     console.log(response2)
// }

// //执行foo函数的代码
// let gen = foo()
// function getGenPromise(gen) {
//     return gen.next().value
// }

// getGenPromise(gen).then((response) => {
//     console.log('response1')
//     console.log(response)
// }).then((response) => {//这并没返回一个新的promise
//     console.log('response1')
//     console.log(response)
// })


// async function foo() {
//     console.log(1)
//     let a = await 100
//     console.log(a);
//     console.log(2)
//     // return a
// }

// console.log(0)
// let b = foo()
// console.log(b)
// console.log(3)
// console.log(b)


async function foo() {
 console.log('foo')
}
async function bar() {
 console.log('bar start')
 await foo()
    console.log('bar end')
    car()
}

function car() {
    let p = new Promise((resolve,reject) => { return resolve(1) })
    p.then((value) => {
        console.log(value)
    })
}
console.log('script start')
setTimeout(function () {
    console.log('setTimeout')
    car()
    
}, 0)
bar();
new Promise(function (resolve) {
 console.log('promise executor')
 resolve();
}).then(function () {
 console.log('promise then')
})
console.log('script end')



async function foo() {
 console.log('foo')
}
async function bar() {
 console.log('bar start')
 await foo()
 console.log('bar end')
}
console.log('script start')
setTimeout(function () {
 console.log('setTimeout')
}, 0)
bar();
new Promise(function (resolve) {
 console.log('promise executor')
 resolve();
}).then(function () {
 console.log('promise then')
})
console.log('script end')