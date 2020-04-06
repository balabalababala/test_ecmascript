'use strict'

function _asyncToGenerator(fn) {
  return function() {
    var gen = fn.apply(this, arguments)
    return new Promise(function(resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg)
          var value = info.value
        } catch (error) {
          reject(error)
          return
        }
        if (info.done) {
          resolve(value)
        } else {
          return Promise.resolve(value).then(
            function(value) {
              step('next', value)
            },
            function(err) {
              step('throw', err)
            }
          )
        }
      }
      return step('next')
    })
  }
}

// const arr = [];
// function show(num) {
//     console.log(num);
//     arr.push(num);
// }
// async function async1(params) {
//     show(1);
//     await async2();
//     show(2);
// }
// async function async2(params) {
//     show(3);
// }
// show(4)
// setTimeout(function () {
//     show(5);
// }, 0)
// async1();
// new Promise(function (resolve) {
//     show(6);
//     resolve();
// }).then(function () {
//     show(7);
// })
// show(8)

// setTimeout(function () {
//     console.log(arr);
// }, 2000);

var sleep = function sleep(second, index) {
  return new Promise(function(resolve) {
    console.log(index)
    setTimeout(function() {
      resolve(new Date())
    }, second * 1000)
  })
}

_asyncToGenerator(
  /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
    var _i, x

    return regeneratorRuntime.wrap(
      function _callee$(_context) {
        while (1) {
          switch ((_context.prev = _context.next)) {
            case 0:
              _i = 0

            case 1:
              if (!(_i < 5)) {
                _context.next = 10
                break
              }

              _context.next = 4
              return sleep(1, _i)

            case 4:
              x = _context.sent

              console.log(_i)
              console.log(x)

            case 7:
              _i++
              _context.next = 1
              break

            case 10:
              _context.next = 12
              return sleep(1, i)

            case 12:
              console.log(i)

            case 13:
            case 'end':
              return _context.stop()
          }
        }
      },
      _callee,
      undefined
    )
  })
)()
console.log(6)
