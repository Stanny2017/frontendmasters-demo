## webpack plugin system

what is Tapable？

- ~200 lines library,the webpack team rewrote it from the ground up for webpack 4
- the entire backbone of webpack plugin system.
- it's the plugin system, it's how we write plugins, it's how plugins are registered, it's how webpack adds any functionality that you could ever think.
- all of webpack is made of plugin

```
 compare usage in webpack 3 & webpack 4

 we use tapable in our library to extend and add methods and behaviors into specific classes,(tapable instances) 


 in webpack4
```
```js
 module.exports = class EntryOptionPlugin{
     apply(compiler){ 
         // hooks event, tap 后面紧跟的是 something like metaData if we need to know what is hooking into this. 通常都会传入 pluginName 作为参数
         compiler.hooks.entryOption.tap('EntryOptionPlugin',(context,entry)=>{

         })
     }
 }
 ```


 even when webpack takes the `entry` option  and start to build dependency graph. there is a plugin called `EntryOptionPlugin` do this job.
 


 ## 7 Tapable instance（aka classes）


 ### Compiler

- exposed via Node API
- top level、central dispatch
- hooks are very top level， they controls when webpack starts, finish bundles, before compiles .etc. 


 ### Compilation (aka：the dependency Graph)

 - it's where webpack kicks off building the dependency graphy.
 - created by Compiler 



