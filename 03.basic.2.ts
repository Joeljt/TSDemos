// 数组
let numArray: number[] = [1, 2, 3];
let strArray: string[] = ['x', 'y', 'z'];
// 基于泛型的数组声明，但是并不建议，因为可能和 JSX 的语法冲突
// 将 < 识别为 html 代码的开始，将 { 识别为 JS 代码的开始
let numArray2: Array<number> = [1, 2, 3];
let strArray2: Array<string> = ['x', 'y', 'z'];
// 如果明确声明元素的类型后，不符合类型声明的就会提示错误
// numArray[3] = 'a'; // TS2322: Type 'string' is not assignable to type 'number'.
// strArray.push(123); // TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.

// 元组 Tuple
// 元组最重要的特性是可以限制元素的个数和类型，适合用来实现多值返回
// 数组类型的值只有显示添加了元组类型注解后（或者使用 as const，声明为只读元组），TypeScript 才会把它当作元组，否则推荐出来的类型就是普通的数组类型
// TODO: 以下声明的类型是否为元组？待确认
const x: [string, boolean] = ['x', false];
const y: [boolean, number] = [true, 123];

// any，绕过静态类型检测的作弊方式
// 可以将任意类型的值复制给 any 类型的变量，也可以将 any 类型的值赋值给除 never 以外的任意类型
let anything: any = {};
anything.doSomething(); // 编译通过，运行时 TypeError: anything.doSomething is not a function
anything = 1;
anything = [1, 2, true, 'str'];
let num: number = anything;
let str: string = anything;
let bol: boolean = anything;
console.log(typeof num) // object
console.log(str)
console.log(bol)
console.log(anything)

// any 类型会在对象的调用链中进行传导:
// 所有 any 类型的任意属性的类型都是 any，即在编译期可以直接调用而不会报错
// BUT, any is hell，除非有充足的理由，否则都不应该使用 any 并开启禁用隐式 any 的设置
let z = anything.x.y.z;
z();

// unknown，since ts@3.0，用来描述类型不确定的变量
//
