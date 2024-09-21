
## resize 事件
文档视图调整大小时会触发 resize 事件


## resize 事件限制
由于resize事件可以以较高的速率触发, 因此事件处理程序不应该执行计算开销很大的操作 (如 DOM 修改)。相反, 建议使用requestAnimationFrame, setTimeout or customEvent