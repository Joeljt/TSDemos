// TypeScript 是 JavaScript 的超集，是对 JS 的补充而非替代，TS = Typed JS
// 在编译期间，TS 代码会被编译成 JS 代码

// 原始类型：number、bigint、string、boolean、Symbol、null、undefined

// 字符串
// 所有 js 支持的定义字符串的方法，都可以在 ts 中使用
let firstName: string = 'Steven'; // 字符串字面量
let familyName: string = String('Jobs'); // 显示类型转换
let fullName: string = `My name is ${firstName} ${familyName}`; // 模板字符串

// 数字
let integer: number = 6; // 十进制整数
let int2: number = Number(42);
let decimal: number = 3.14; // 十进制浮点数
let binary: number = 0b1010; // 二进制整数
let octal: number = 0o744; // 八进制整数
let hex: number = 0xf00d; // 十六进制整数
// @ts-ignore
let big: bigint = 1000000n; // 大整数使用 bigint，与 number 不兼容
// big = integer; // TS2322: Type 'number' is not assignable to type 'bigint'.

// 布尔值
let tsGreat: boolean = true;

// Symbol
// 自 ES6 起，TS 支持新的 Symbol 类型，可以通过 Symbol 构造函数创建一个唯一的标记
let symbol1: symbol = Symbol();
let symbol2: symbol = Symbol("descriptions for current symbol");

// Number、String、Boolean、Symbol 等类型与小写格式的类型并不等价
// 小写是大写的子集，小写可以赋值给大写，但是大写不可以赋值给小写

let aSym: symbol = Symbol('a');
let bSym: Symbol = Symbol('b');

// 'symbol' is a primitive, but 'Symbol' is a wrapper object. Prefer using 'symbol' when possible.
// aSym = bSym; // failed, TS2322: Type 'Symbol' is not assignable to type 'symbol'.
// bSym = aSym; // ok

let aStr: String = String('a');
let bStr: string = 'a';

// TS2322: Type 'String' is not assignable to type 'string'.
// 'string' is a primitive, but 'String' is a wrapper object. Prefer using 'string' when possible.
// aStr = bStr; // ok
// bStr = aStr; // failed

// 类型声明并没有特别的作用，不声明也不会报错
let a = 'This is a string value';
let b: string = 'This is an another string value';
// 但是声明类型与属性的值如果不同，就会报错
// let c: number = 'Wrong type value'; // TS2322: Type 'string' is not assignable to type 'number'.

// TODO: 请举例说明 ts(2322) 是一个什么错误？什么时候会抛出这个错误？
// FIXME: ts(2322) 是静态检查错误，会在声明的类型与实际赋值的类型不匹配时抛出
