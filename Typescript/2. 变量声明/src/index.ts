// 变量声明
let str: string = 'i m string'
let num: number = 123
let boo: boolean = false
let nu: null = null
let udf: undefined = undefined

// 联合类型
let lianhe: number | undefined | null | string = 123
lianhe = undefined
lianhe = 'sdfsf'
lianhe = null
// 联合类型共有的属性和方法才不会报错
function test (param: string | number) {
  // return param.length // 类型“string | number”上不存在属性“length”
}
let test2:string | number;
test2 = '123'
console.log(test2.length);
test2 = 2
// console.log(test2.length); // 类型“number”上不存在属性“length”

// 类型推论
let num1 = 123 // let renyi: number
let str1 = 'dshfus' // let str1: string
let x = [0, 1, null] // let x: (number | null)[]
let any // let any: any
