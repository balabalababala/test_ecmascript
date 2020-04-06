function request() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve({ a: 1 })
    },1000)
  })
}

function fn2(data) {
  console.log(data)
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve({ a: 2 })
    })
  })
}

request()
  .then(res => {
    if (!res || !res.success) {
      return Promise.reject({b:1})
    }
  })
  .then(fn2)
  .catch(data => {console.log(data)})
