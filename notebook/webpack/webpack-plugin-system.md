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
 


 # 7 Tapable instance（aka classes）


 ## Compiler

- exposed via Node API
- top level、central dispatch
- hooks are very top level， they controls lifecircle  such as when webpack starts, finish bundles, before compiles .etc. 


 ## Compilation (aka：the dependency Graph)

 - it's where webpack kicks off building the dependency graphy.
 - created by Compiler.
 - the brain of webpack.
 - it contains the dependency graph traversal algorithm.


 ## Resolver

 - give a partical path，and it's ganna to make sure it exists. 
 - The Resolver instance asynchronously locates a module by its particle path
 - it's faster than node synchronize resolver

## Module Factory

- create module instance,( Factory, which create objects)
- Module Factories take successfully resolved requests and collect the source from the file to store the information in a module object

## Parser

- takes the string of the source code, and convert it to AST（Abtract syntax tree） 


## Template

- data bind for modules
- create the code you see in the bundles


# creating plugins

through plugins, you can modify anthing in webpack
