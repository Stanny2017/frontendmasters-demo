## javascript

javascript engine 包含三部分：

1. thread of execution
2. memory/variable environment
3. call stack 

然而单线程的特性在遇到一些耗时（需要等待）的任务时，就会阻塞执行，so

javascript is not enough, 我们需要添加一些新的特性：

1. 宿主: Web Broswer APIs/ Node background APIs
2. Promise
3. Event loop, Callback/Task queue and Micro task queue.

ES5 的异步逻辑靠 callback function

event loop 会在执行每行代码前 loop -> call stack, 如果还有需要执行的逻辑，则继续执行
如果没有，则把 callback queue 里面的任务拿一个出来  推入call stack 执行；

在app running的时候 event loop 持续running 

弊端
1. callback hell
2. callback 的方式用起来也很奇怪

benifit：理解底层原理，运行逻辑就很清晰；

## promise

promise example： fetch （web browser API）

two pronged function （二叉函数）：

- in JavaScript： return a placeholder object { value: ... , onfullfilliment:[]}    

```
promise object 可以理解为在JavaScript中有个对象可以查看状态，而之前的callback 方式 我们不知道任何状态；只能等着
这俩都是 hidden property
value 一旦注入，则会调用  onfullfillment 中的函数
使用 .then 方法 注入  onfullfillment 的成功回调
类似 有一个 onRejectment 
```

- in web browser: fetch info via network, 一旦获取返回结果将result 写入 object.value 

### how does promise-derferred function get back to run 

> different queue

setTimeout fn ---> callback queue (task queue)
promise fn ---> microtask queue




## Object

```
Object.create(null)
```
