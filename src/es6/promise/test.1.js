var a = new Promise(function(resolve, reject) {
  try {
    if (aa.bb.cc) {
      resolve({ success: true })
    }
  } catch (e) {
    resolve({ success: false })
  }
})

var b = new Promise(function(resolve, reject) {
  setTimeout(() => {
    resolve(a)
  }, 2000)
})

b.then(function(x) {
  console.log('123', x)
}).catch(function(e) {
  console.log(123)
})
