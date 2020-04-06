var a = new Promise(function(resolve, reject) {
  setTimeout(() => {
    resolve({ a: 1 })
  }, 1000)
})
var b = new Promise(function(resolve, reject) {
  setTimeout(() => {
    /**
     * try...catch是被设计成捕获当前执行环境的异常，意思是只能捕获同步代码里面的异常，异步调用里面的异常无法捕获。
     * 第一种方式：异常出现在异步调用里面，try..catch无法捕获。
     * 第二重方式：try..catch是写在异步代码里面，相对于try里面的所有执行都是同步代码，所以能捕获。
    */
    // throw new Error('adsfa') // 考点，为什么这样的异常是捕获不到的
    reject({ b: 1 })
  }, 2000)
})
// .catch(e => {
//   console.log('1\t' + e)
// })

// FIXME:这样会出错，也不会输出 after error，如何才能正确捕获异常？
async function test() {
  try {
    const [aResult, bResult] = await Promise.all([a, b]).catch(error => {
      console.log('b error', error)
    })

    // console.log(aResult, bResult)
    // console.log('after error')
  } catch (e) {
    console.log(e.toString())
  }
  console.log('after await error')
}
test()

Promise.all([a, b])
  .then((aResult, bResult) => {
    console.log('haha',aResult, bResult)
  })
  .catch(e => {
    console.log(e.toString())
  })

function newError() {
  setTimeout(function() {
    throw new Error('bbbb') // setTimeout
  }, 2000)
}

function newError2() {
  throw new Error('bbbb')
}
/**
 * try...catch是被设计成捕获当前执行环境的异常，意思是只能捕获同步代码里面的异常，异步调用里面的异常无法捕获。
 * 第一种方式：异常出现在异步调用里面，try..catch无法捕获。
 * 第二重方式：try..catch是写在异步代码里面，相对于try里面的所有执行都是同步代码，所以能捕获。
*/
// try {
//   newError()
// } catch (e) {
//   console.log(4)
//   console.log(e.toString())
// }
// console.log(3)


// try {
//   newError2()
// } catch (e) {
//   console.log(4)
//   console.log(e.toString())
// }
// console.log(3)
