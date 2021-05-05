//about any
//any是JavaScript中没有的数据类型，它在TypeScript中用于表示任意类型
let any1: any = 123
let any2: any = 'sdfsf'
let any3: any = undefined
let any4: any = null

//如果变量在声明的时候 没有指定它的类型和进行初始化赋值的时候 这个变量会被识别为any类型
let any5 //let any2: any

//如果是普通类型，在赋值过程中改变变量的类型是不被允许的
let num: number = 12
// num = 'sdfsdf' //不能将类型“string”分配给类型“number”

//但是any数据类型允许被赋值为任意类型
any1 = 'sdfsf' //不会报错

//在any类型上访问任意的属性和方法都是被允许的 即是这个属性和方法是不存在的
any1.sdfsf()
any1.name //不会报错

//about Object
//Object 可以
let obj1: Object = 4
let obj2: Object = 'sdfsf'
let obj3: Object = false
let obj4: Object = {}
// let obj5: Object = undefined // 报错
// let obj6: Object = null //报错

// obj1.toFixed() //Object是没有这个方法的
obj1.toString() //Object是有这个方法的

declare function create(o: object | null): void; // 这里全局创建了一个函数 接收对象 | null

create({ prop: 0 }); // OK
create(null); // OK
create({})

// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error

// about void
//void 是当函数没有返回值的时候使用
function test(): void{
    console.log('This is a test function');
    return undefined //返回undefined是不会报错的
    // return null //不能将类型“null”分配给类型“void”
    // return 3 //不能将类型“number”分配给类型“void”
}

//about null& undefined
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