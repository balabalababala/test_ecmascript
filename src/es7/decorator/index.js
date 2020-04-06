// class Cat {
//     meow() {
//         return `${this.name} says Meow!`;
//     }
// }

//用prototype的方式定义这个类，在Cat.prototype上增加meow方法，大概是这个样子：
// Object.defineProperty(Cat.prototype, 'meow', {
//     value: specifiedFunction,
//     enumerable: false,
//     configurable: true,
//     writable: true
// });

function readonly(target, name, descriptor) {
  console.log(target, name);
  descriptor.writable = false;
  return descriptor;
}

class Cat {
  name; //浏览器不支持这样写

  @readonly //浏览器目前不支持
  entree = "steak";

  constructor(name) {
    this.name = name;
  }
  @readonly //浏览器目前不支持
  meow() {
    return `${this.name} says Meow!`;
  }
  // laugh=()=>{//这是jsx的写法，不是原生的ES的写法
  laugh() {
    return `${this.name} laugh !`;
  }
}

const cat = new Cat("DD");
console.log(cat.meow());
console.log(cat.laugh());
console.log(cat.entree);
// cat.entree = "xxxe";//报错

//装饰一个类
function superhero(target) {
  target.isSuperhero = true;
  target.power = "flight";
}

@superhero
class MySuperHero {}

console.log(MySuperHero.isSuperhero); //true

(function() {
  function superhero(isSuperhero) {
    return function(target) {
      target.isSuperhero = isSuperhero;
    };
  }

  @superhero(true)
  class MySuperHeroClass {}

  console.log(MySuperHeroClass.isSuperhero); //true

  @superhero(false)
  class MySuperHeroClass2 {}

  console.log(MySuperHeroClass2.isSuperhero); //false
})();
