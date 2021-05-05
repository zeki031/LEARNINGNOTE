"use strict";
//any是JavaScript中没有的数据类型，它在TypeScript中用于表示任意类型
var any = 123;
//如果变量在声明的时候 没有指定它的类型和进行初始化赋值的时候 这个变量会被识别为any类型
var any2; //let any2: any
//如果是普通类型，在赋值过程中改变变量的类型是不被允许的
var num = 12;
// num = 'sdfsdf' //不能将类型“string”分配给类型“number”
//但是any数据类型允许被赋值为任意类型
any = 'sdfsf'; //不会报错
//在any类型上访问任意的属性和方法都是被允许的 即是这个属性和方法是不存在的
any.sdfsf();
any.name; //不会报错
