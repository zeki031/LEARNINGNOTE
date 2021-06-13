// about Class
// 普通的类的注解
class Greeter {
  greeting: string; // 创建greeting属性
  // 构造函数
  constructor(message: string) {
    this.greeting = message; // 令当前的greeting属性 = message参数
  }
  greet() {
    // 方法 greet
    return 'Hello, ' + this.greeting;
  }
}
let greeter = new Greeter('world');
