* [TypeScript](#typescript)
  * [编译](#编译)
  * [<a href="https://github\.com/zsczq/LEARN/blob/main/Typescript/%E7%B1%BB%E5%9E%8B/src/index\.ts">数据类型</a>](#数据类型)
    * [Any](#any)
    * [Object](#object)
    * [Void](#void)
    * [Null &amp; Undefined](#null--undefined)
    * [Never](#never)
  * [<a href="https://github\.com/zsczq/LEARN/blob/main/Typescript/%E5%8F%98%E9%87%8F%E5%A3%B0%E6%98%8E/src/index\.ts"> 变量声明</a>](#变量声明)
  * [类型断言](#类型断言)
  * [接口](#接口)



# TypeScript

1. TypeScript是JavaScript的超集
2. 它提供了更丰富的语法提示
3. 它能够在编译的阶段检查语法错误
4. 提高了代码的可读性和可维护性



## 编译

浏览器是无法直接编译ts代码的 需要将其编译为js 

需要安装node.js

```typescript
npm -v 
npm install -g typescript
tsc -v
tsc index.ts //将其编译为js 得到index.js
```





## [类型](https://github.com/zsczq/LEARN/blob/main/Typescript/%E7%B1%BB%E5%9E%8B/src/index.ts)

boolean	string	number	null	underfined	symbol

​	any	never	void

object

​	interface	tuple	enum	number[]	string[]	Array\<number>	Array\<string>



### Any

any是JavaScript中没有的数据类型，它在TypeScript中用于表示任意类型

它如果为对象的时候 不能够提示原有的属性和方法

建议能不使用any就不去使用any

```typescript
//any是JavaScript中没有的数据类型，它在TypeScript中用于表示任意类型
let any:any = 123

//如果变量在声明的时候 没有指定它的类型和进行初始化赋值的时候 这个变量会被识别为any类型
let any2; //let any2: any

//如果是普通类型，在赋值过程中改变变量的类型是不被允许的
let num: number = 12
// num = 'sdfsdf' //不能将类型“string”分配给类型“number”

//但是any数据类型允许被赋值为任意类型
any = 'sdfsf' //不会报错

//在any类型上访问任意的属性和方法都是被允许的 即是这个属性和方法是不存在的
any.sdfsf()
any.name //不会报错
```



### Object

`object`表示非原始类型，也就是除`number`，`string`，`boolean`，`symbol`，`null`或`undefined`之外的类型。

但是 `Object`类型的变量只是允许你给它赋任意值 - 但是却不能够在它上面调用任意的方法，即便它真的有这些方法

**这里我不是很理解 他这句话 ——但是却不能够在它上面调用任意的方法，即便它真的有这些方法**

```typescript
declare function create(o: object | null): void; // 这里全局创建了一个函数 接收对象 | null

create({ prop: 0 }); // OK
create(null); // OK
create({}); //OK

create(42); // Error
create("string"); // Error
create(false); // Error
create(undefined); // Error
```



### Array

对数组类型的注解

```typescript
// 2. 泛型 Array<类型> 例 Array<number>
// 3. interface
let arr1 = [1, 2, 3, '4'] // let arr1: (string | number)[]
// let arr2: number[] = [1, 2, 3, '4'] // 不能将类型“string”分配给类型
let arr3 = [1, 2, 3, 4]
let arr4: Array<number> = [1, 2, 3, 4] //泛型描述数组
// interface 描述数组
interface List {
  [index: number]: number | string
}
let list: List = [1, 2, 3, 4, '5']
```



### Function

对函数的注解





### Void

他表示的是函数没有返回值 

```typescript
function test(): void{
    console.log('This is a test function');
    return undefined //返回undefined是不会报错的
    // return null //不能将类型“null”分配给类型“void”
    // return 3 //不能将类型“number”分配给类型“void”
}
```



### Null & Undefined

默认情况下`null`和`undefined`是所有类型的子类型。 就是说你可以把 `null`和`undefined`赋值给`number`类型的变量。

```typescript
let kong: null = null //let kong: null
let udf: undefined = undefined //let udf: undefined

// kong = 123 //不能将类型“123”分配给类型“null”
// udf = 123 //不能将类型“123”分配给类型“undefined”。

//但是下面的情况却不一样
let kong2 = null //let kong2: any
let udf2 = undefined //let udf2: any

let num2 = 123 //let num2: number

kong2 = 123
udf2 = 123
//这个例子可以说明直接赋值undefined和null 它的变量是为any类型

//默认情况下null和undefined是所有类型的子类型 这句话体现哪里呢？
let num3: number = 123 //let num3: number
// num3 = undefined //不能将类型“undefined”分配给类型“number”
//这里其实是可以让他不进行报错的 需要在tsconfig.json中对-strictNullChecks标记进行修改 但是官方中是不建议这样做的
//它建议这样来声明变量
let num4: number | undefined | null = 123
num4 = undefined
num4 = null
```



### Never

`never`类型表示的是那些永不存在的值的类型———— 个人理解 ：即是永远没有办法执行完的函数 例如死循环等有问题的函数  这个值的类型就是**报错**

```typescript
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}
```



## [变量声明](https://github.com/zsczq/LEARN/blob/main/Typescript/%E5%8F%98%E9%87%8F%E5%A3%B0%E6%98%8E/src/index.ts)

### 联合类型

通过 `|` 来将变量设置多种类型 

```typescript
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
```



### 类型推论

如果没有明确的指定类型，类型推论会帮助提供类型

```typescript
let num1 = 123 // let renyi: number
let str1 = 'dshfus' // let str1: string
let x = [0, 1, null] // let x: (number | null)[]
let any; // let any: any
```

**注意：在只是声明了变量但是未赋值的情况下 变量的是为any类型的**



## 接口	interface

```typescript
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
```



## 类型断言







## 







## 



