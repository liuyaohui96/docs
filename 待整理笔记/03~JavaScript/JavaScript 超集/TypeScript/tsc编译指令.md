
## tsc编译指令
* `tsc <fileName-list>` : 编译指定文件列表
* `tsc --removeComments ` : 删除文件的注释
* `tsc --out `<fileName>`：编译多个文件并合并到一个输出的文件
* `tsc --soucemap`: 生成一个 sourcemap (.map) 文件
* `tsc --watch`: 在监视模式下运行编译器，改变时重新编译
```shell
# 单文件编译
tsc file1.ts
# 多文件编译
tsc file1.ts file2.ts file3.ts
```