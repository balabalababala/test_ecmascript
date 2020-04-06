const fn1 = function() {
  return new Promise(resolve => {
    setTimeout(function() {
      console.log("fn1 run");
      resolve(1);
    }, 1000);
  });
};

const fn12 = async function() {
  await fn1();
  return "12";
};

const fn2 = function() {
  return new Promise(resolve => {
    setTimeout(function() {
      console.log("fn2 run");
      resolve(2);
    }, 1000);
  });
};

const fn22 = async function() {
  await fn2();
  return "22";
};

const a = async function() {
  console.log(1);
  const a = fn12(); // promise
  const b = fn22(); // promise

  const [aResult, bResult] = await Promise.all([a, b]);
  console.log(a);
  console.log(b);
  console.log(aResult);
  console.log(bResult);
  console.log(2);
};

a();
