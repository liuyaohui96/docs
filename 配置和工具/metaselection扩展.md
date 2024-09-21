## 选择行
vsCode 默认的 select current line 命令（Ctrl+l）选择当前行，并将光标放在下一行的起始位置，扩展了：
1. Ctrl+l 如果光标处没有选择，则选择当前行，如果光标之前/之后有选择，则将其选择延长/收缩到下面一行
2. Ctrl+o 将所选内容扩展/收缩到上方一行（如果光标之后/之前有选区）
3. 默认情况下，Ctrl+o 会触发打开文件，并且仅当活动编辑器中有选择时，它才会触发 extend line selection above
4. 如果要选择 Line Up，您应该按 Ctrl+l 选择当前行，然后按 Ctrl+O 扩展上面的行选择
默认情况下，selectLineUp 命令配置为：
```json
{
    "command": "metaGo.selectLineUp",
    "key": "ctrl+o",
    "when": "editorTextFocus && editorHasSelection"
}
```
可以分配一个不与默认 VSCode 键冲突的快捷键，只需删除 editorHasSelection 条件，这样即使在编辑器中没有选择，它也可以正常工作