// 接口 interface
let obj1 = {
  name: 'zhangsan',
  age: 18
}
// 下面是 obj1 自动描述
// let obj1: {
//     name: string;
//     age: number;
// }

// 对对象的结构进行描述
interface Person {
  name: string
  age: number
}
let tim: Person = {
  name: 'tim',
  age: 15
  //   sex:'male'//  对象文字可以只指定已知属性，并且“sex”不在类型“Person”中
}

// 可选属性 和 只读属性
// interface 不可多也不可少
interface Animal {
  name: string
  readonly age: number
  species?: string // 可选属性 可以省略该属性 好处在于可以提前定义可能存在的属性
  [propName: string]: any // 任意属性(额外属性)的类型一定是any
  //   [propName: string]: number // 上面类型不为 number 的属性会报错
}
let tom: Animal = {
  name: 'tom',
  age: 1,
  height: 20 // 多出的属性
}
// 对只读属性 age 进行修改
// tom.age = 20 //无法分配到 "age" ，因为它是只读属性
// 只读属性 - 只读数组 ReadonlyArray<T> 数组创建后无法再次被改变
let a: number[] = [1, 2, 3, 4];
let ra: ReadonlyArray<number> = a;
// ra[0] = 1; // 想要对只读数组进行修改 类型“readonly number[]”中的索引签名仅允许读取
// 在官方文档中的说明： 它与Array<T>相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改
// a = ra; // 类型 "readonly number[]" 为 "readonly"，不能分配给可变类型 "number[]"
a = ra as number[] // 但是可以使用类型断言重写

// 额外属性 
interface SquareConfig {
  color?: string;
  width?: number;
}
function createSquare(config: SquareConfig): { color: string; area: number } {
  // ...
  return {color:'a',area:1 }
}
// let mySquare = createSquare({ colour: "red", width: 100 }); // 因为SquareConfig中没有colour这个属性
// 绕开检查的方法 
// 1. 使用类型断言
let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig); // opacity 也是SquareConfig中没有的属性
// 2. 定义额外属性[propName: string]: any;
// 3. 不推荐 它就是将这个对象赋值给一个另一个变量： 因为 squareOptions不会经过额外属性检查，所以编译器不会报错。
let squareOptions = { colour: "red", width: 100 };
let Square = createSquare(squareOptions);
