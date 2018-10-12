interface abc {
  color?: string //类型名称后面带问号，是因为此类型是值类型，如果你需要这个类型名称可以为空，则需要带问号才不会报错
  width?: number
}

function creatSquare(config: abc): { color: string; area: number } {
  let newabc = { color: "white", area: 100 }
  if (config.color) {
    newabc.color = config.color
  }

  if (config.width) {
    newabc.area = config.width * config.width
  }

  return newabc
}

let myabc = creatSquare({ color: "black" })

interface Point {
  readonly x: number
  readonly y: number
}

interface SearchFunc {
  (source: string, subString: string): boolean
}

interface ClockInterface {
  currentTime: Date
  setTimeout(d: Date)
}
class Clock implements ClockInterface {
  currentTime: Date
  setTimeout(d: Date) {
    this.currentTime = d
  }
  constructor(h: number, m: number) {}
}

interface Shape {
  color: string
}

interface PenStroke {
  penWidth: number
}

interface Square extends Shape, PenStroke {
  slideLength: number
}

let square = <Square>{}
square.color = "yellow"
square.penWidth = 10
square.slideLength = 5.0

interface Counter {
  (start: number): string //作为函数来定义，参数为数字类型，返回值为字符串类型
  interval: number //作为对象定义
  reset(): void //定义一个方法
}

function getCounter(): Counter {
  let counter = <Counter>function(start: number) {}
  counter.interval = 123
  counter.reset = function() {}
  return counter
}
let c = getCounter()
c(10)
c.reset()
c.interval = 5.0

//类类型
class Control {
  private state: any //私有成员
}
//定义一个 a 接口来继承Control这个类，因为 a 接口集成后，则它包含了Control这个弗雷德所有成员，包括私有成员 state
// state作为私有成员，所以只能是Control的子类们才能实现 a 接口
//只有Control子类才能够拥有父类的私有成员 state
interface a extends Control {
  do(): void
}
//C作为子类继承Control父类，并且实现 a 接口方法
class C extends Control implements a {
  do() {}
}
// D作为子类继承Control父类
class D extends Control {
  do() {}
}

//下面这个就会报错了，因为 Image 这个类并不是 Control 的子类，所以不能用 a 接口
class Image implements a {
  do() {}
}

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

//继承

// class Animal {
//   move(miles: number = 0) {
//     console.log(`Animal moved ${miles}米`)
//   }
// }
// class Dog extends Animal {
//   bark() {
//     console.log("wang!wang!")
//   }
// }
// const dog = new Dog()
// dog.bark()
// dog.move(10)

//继承

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

输出：
// Slithering...
// Sammy the Python moved 5m.
// Galloping...
// Tommy the Palomino moved 34m.


//抽象类

abstract class A {
  constructor(public name:string){}
  
  //普通定义方法，包括具体实现，访问实例属性用this
  printName():void{
    console.log('名字：' + this.name)
  }

  //抽象类方法,必须有关键字 abstract ,并且不包含具体实现，只能在派生类实现
  abstract printMeeting():void
}

//作为抽象类 A 的派生类 B 登场

class B extends A {
  constructor(){
    //在派生类的构造函数必须调用super()
    super('LALALALLALA') 
  }

  printMeeting():void{
    console.log('这是基类A定义的抽象类方法，在派生类B的实现')
  }

  hello():void{
    console.log('这是没有在基类A定义的方法，只是派生类B定义的普通方法')
  }
}

let a : A // 允许创建一个抽象类型的引用
a = new A() //报错！不能创建一个抽象类的实例，直接实例化报错
a = new B() // 允许对一个抽象子类进行实例化和赋值
a.printName() //这是抽象类 A里面定义的普通方法
a.printMeeting() //这是调用抽象类 A 里面定义的抽象类方法
a.hello() //报错！ 这个方法抽象类A中并没有定义，所以引用报错
