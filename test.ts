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
