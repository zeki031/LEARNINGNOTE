"use strict";
// 变量声明
var str = 'i m string';
var num = 123;
var boo = false;
var nu = null;
var udf = undefined;
// 联合类型
var lianhe = 123;
lianhe = undefined;
lianhe = 'sdfsf';
lianhe = null;
// 联合类型共有的属性和方法才不会报错
function test(param) {
    // return param.length // 类型“string | number”上不存在属性“length”
    console.dir(param);
}
test('1');
// 类型推论
var num1 = 123; // let renyi: number
var str1 = 'dshfus'; // let str1: string
var x = [0, 1, null]; // let x: (number | null)[]
var any; // let any: any
