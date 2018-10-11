# TypeScript

## 类

1. 引用类的成员时，需要加`this`
2. 我们使用 new 构造了 Greeter 类的一个实例。 它会调用之前定义的构造函数，创建一个 Greeter 类型的新对象，并执行构造函数初始化它。
   示例：

```ts
class Greeter {
  //属性
  greeting: string

  //构造函数
  constructor(message: string) {
    this.greeting = message
  }

  //方法
  greet() {
    return "Hello," + this.greeting
  }
}

let greeter = new Greeter("world")
```

简单的继承示例：

```ts
class Animal {
  move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}米`)
  }
}
class Dog extends Animal {
  bark() {
    console.log("wang!wang!")
  }
}
const dog = new Dog()
dog.bark()
dog.move(10)
```

复杂一点得继承示例：

```ts
class Animal {
  name: string
  constructor(theName: string) {
    this.name = theName
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}米`)
  }
}

class Snake extends Animal {
  // 子类包含一个构造函数，必须调用 super(),它会执行基类的构造函数。在构函数访问this的属性之前，一定要调用super()。这是TypeScript强制执行的一条重要规则。
  constructor(name: string) {
    super(name)
  }
  move(distanceInMeters = 45) {
    console.log("蛇...")
    super.move(distanceInMeters) //访问类属性前，需调用super,这里重写了从基类继承来的move方法，使得具有不同的功能
  }
}

class Horse extends Animal {
  constructor(name: string) {
    super(name)
  }
  move(distanceInMeters: number = 35) {
    console.log("马...")
    super.move(distanceInMeters)
  }
}

let sam = new Snake("sammy the Python")
let tom: Animal = new Horse("Tommy the Palomino")

sam.move()
tom.move(34) //这里tom声明使Animal类型，但是值为Horse，调用tom.move时，会调用Horse里重写的方法

//输出：
// 蛇...
// Sammy the Python moved 5m.
// 马...
// Tommy the Palomino moved 34m.
```
