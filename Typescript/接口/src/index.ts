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
  species?: string // 可选属性 可以省略该属性
  [propName: string]: any // 任意属性的类型一定是any
  //   [propName: string]: number // 上面类型不为 number 的属性会报错
}

let tom: Animal = {
  name: 'tom',
  age: 1,
  height: 20 // 多出的属性
}
// 对只读属性 age 进行修改
// tom.age = 20 //无法分配到 "age" ，因为它是只读属性

// interface 对数组的注解
