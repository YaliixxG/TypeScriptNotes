# TypeScript

## 基础类型

### 布尔值

    let isDone: boolean = false;

### 数字

    let decLiteral: number = 6;
    let hexLiteral: number = 0xf00d;
    let binaryLiteral: number = 0b1010;
    let octalLiteral: number = 0o744;

### 字符串

    let name: string = "bob";
    let age: number = 37;
    //也可以使用ES6模板字符串 `` 和 ${}
    let sentence: string = ` Hello, my name is ${ name }. I'll be ${ age + 1 } years old next month.`;

### 数组

两种方式定义数组：

- 在元素类型后面接上[],表示由此类型元素组成的一个数组：

  let list: number[] = [1,2,3];

* 使用数组泛型，Array<元素类型>:

  let list: Array<number> = [1,2,3];

### 元祖 Tuple

元祖可以表示一个已知元素数量和类型的数组，各元素的类型不必相同。

    let x: [string, number]; //定义一对值分别为string和number类型的元祖

    x = ['hello',10]; //OK

    x = [10, 'hello]; //报错

### 枚举

`enum`类型是对 JS 数据类型的一个补充，它表示的是一个命名元素的集合。

    //命名元素集合里面的值，默认为递增的 0,1,2,3...
    enum Color {Red,Green,Blue};
    let c: Color = Color.Green; // 1

    //也可以显示指定值,没有被指定的会默认在前面的值递增
    enum Color {Red = 1, Green, Blue = 4}
    let c: Color = Color.Green; // 2

    //当然，你也可以用值来得到对应的名称是什么，但是如果没有与之对应的枚举项就是 undefined
    enum Coloe {Red = 1, Green, Blue}
    let colorName: string = Color[2]; // 'Green'
    let colorName: string = Color[Color.Green]; // 'Green'

### 任意值

当我们并不清楚这个变量的类型的时候，可以用`any`类型来标记这些变量

    let notSure: any = 4;
    notSure = "可能是个字符串呢";
    notSure = false; //这必须是个布尔值了 = =
