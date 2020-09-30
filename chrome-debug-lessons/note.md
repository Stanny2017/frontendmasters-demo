# 学习笔记

## debugging

1. chrome store recent selection history： $0 自动输出选中的dom元素
2. elements 中的 dom 元素是可拖动的，右键可以选择 :hover
3. color 推荐系统是个好东西
4. cmd+P (open file)、cmd + shift + P (Run  command)
5. debug: watch (查看变量值在不同时间的变化)  watch & call stack (发生错误时 学会使用call stall  调用堆栈，找到根源)
6. black-box scripts (忽略一些第三方库的debug，你不想看里面的执行，只关注自己的代码)
7. conditional breakpoint  （非常有用！！！ add a conditional breakpoint）
8. XHR/fetch breakpoint (请求包含设置值时，breakpoint)

## Network
> waterfall

1. Queuing：the request was put on because the broswer only allows six TCP connections per origin HTTP1
2. stalled: request not send yet, include queuing, proxy Negotiation,DNS lookup,time to establish a connection(including tcp handshakes/retries and negotiating a SSL
3. request sent/sending:TTFB(time to first byte、content download)