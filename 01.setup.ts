function say(word: string) {
    console.log(word)
}
say('Hello, TS!')

// 指定转译的目标文件后，tsc 将忽略当前应用路径下的 tsconfig.json 配置
// 因此，需要显示声明，让 tsc 以严格模式检测并转移 typescript 代码
// --watch 可以监听文件内容的变更
// tsc xxx.ts --strict --alwaysStrict false --watch
