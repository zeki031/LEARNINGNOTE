"use strict";
// about any
// any是JavaScript中没有的数据类型，它在TypeScript中用于表示任意类型
var any1 = 123;
var any2 = 'sdfsf';
var any3 = undefined;
var any4 = null;
// 如果变量在声明的时候 没有指定它的类型和进行初始化赋值的时候 这个变量会被识别为any类型
var any5; //let any2: any
// 如果是普通类型，在赋值过程中改变变量的类型是不被允许的
var num = 12;
// num = 'sdfsdf' //不能将类型“string”分配给类型“number”
// 但是any数据类型允许被赋值为任意类型
any1 = 'sdfsf'; //不会报错
// 在any类型上访问任意的属性和方法都是被允许的 即是这个属性和方法是不存在的
// any1.sdfsf() // 执行js文件的时候会报错
any1.name; //不会报错
// about Object
// Object 可以
var obj1 = 4;
var obj2 = 'sdfsf';
var obj3 = false;
var obj4 = {};
// let obj5: Object = undefined // 报错
// let obj6: Object = null //报错
// obj1.toFixed() //Object是没有这个方法的
obj1.toString(); //Object是有这个方法的
create({ prop: 0 }); // OK
create(null); // OK
create({});
// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error
// about void
// void 是当函数没有返回值的时候使用
function test() {
    console.log('This is a test function');
    return undefined; //返回undefined是不会报错的
    // return null //不能将类型“null”分配给类型“void”
    // return 3 //不能将类型“number”分配给类型“void”
}
// about null& undefined
var kong = null; //let kong: null
var udf = undefined; //let udf: undefined
// kong = 123 //不能将类型“123”分配给类型“null”
// udf = 123 //不能将类型“123”分配给类型“undefined”。
// 但是下面的情况却不一样
var kong2 = null; //let kong2: any
var udf2 = undefined; //let udf2: any
var num2 = 123; //let num2: number
kong2 = 123;
udf2 = 123;
// 这个例子可以说明直接赋值undefined和null 它的变量是为any类型
//默认情况下null和undefined是所有类型的子类型 这句话体现哪里呢？
var num3 = 123; //let num3: number
// num3 = undefined //不能将类型“undefined”分配给类型“number”
// 这里其实是可以让他不进行报错的 需要在tsconfig.json中对-strictNullChecks标记进行修改 但是官方中是不建议这样做的
// 它建议这样来声明变量
var num4 = 123;
num4 = undefined;
num4 = null;
// 对数组类型的注解
// 1. 类型[] 例 number[]
// 2. 泛型 Array<类型> 例 Array<number>
// 3. interface
var arr1 = [1, 2, 3, '4']; // let arr1: (string | number)[]
// let arr2: number[] = [1, 2, 3, '4'] // 不能将类型“string”分配给类型
var arr3 = [1, 2, 3, 4];
arr3.push(5);
console.log(arr3);
