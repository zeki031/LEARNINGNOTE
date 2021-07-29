"use strict";
// 接口 interface
var obj1 = {
    name: 'zhangsan',
    age: 18
};
var tim = {
    name: 'tim',
    age: 15
    //   sex:'male'//  对象文字可以只指定已知属性，并且“sex”不在类型“Person”中
};
var tom = {
    name: 'tom',
    age: 1,
    height: 20 // 多出的属性
};
// 对只读属性 age 进行修改
// tom.age = 20 //无法分配到 "age" ，因为它是只读属性
// interface 对数组的注解
