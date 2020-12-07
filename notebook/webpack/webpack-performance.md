# Web Performance with Webpack

- [slides](https://docs.google.com/presentation/d/1FW3GT9Ww1S6SEGu8HAO5eRZUFggfVuFE2ievNCDWVDo/edit#slide=id.g376e8d6b61_0_4)
- main technologies: lazy load; code split; tree shaking; prefetch asserts

## 影响页面加载速度的因素：

初始页面加载的 js 文件数量、css 文件数量、网络数量（initial download）

## 理想情况(if you want a high performance application)

> based on research

1. `<=200kb` (uncompressed) initial javascript (total)
2. `<=100kb` (uncompressed) initial css (total)
3. http:`<= 6`(6-8) initial network calls
4. http/2: `<=20`(20-50) initial network calls
5. 90% code coverage (only 10% unused)

## code coverage

1. `cmd+shift+p` 打开控制面板 `show coverage`


## coding splitting

`coding splitting` is the most important thing. exists to slove performance problems. （improve initial experience）

1. static and dynamic

```js
// two types of code splitting
// 1. static: on webpack build time.

// 2. dynamic
import() // (stage 3, part of whatwg/loader)
//  always return a promise
```

2. when to use `import()`?

```
(1) heavy library
(2) anything temporal
(3) routes
```

3. set mode to `none` to see what's bundled in webpack buildtime.

4. webpack build result

```js
// this is the lazy loading tranformation , which converts dynamic import code into __webpack_require__.e
__webpack_require__.e = function(chunkId){//...}

```

5. vendor bundles are an Anti pattern.
```
if for cache reason，you get a big file which most of code unused， it's an anti pattern
that's why webpack4 get rid of common chunk.

remember Always focus on splitting before caching
```

6. dynamic code spliting

```js
import(`./src/someFolder/${fileName}`)
// this tells: Hey webpack! Find me all modules in this partial path”

```

7. magic comments
```
use magic comments can helps webpack determines what to do code splitting, 
including name of chunk file, and some other features like prefetch/preload. etc.

webpackMode:  which can determine how code splitting may occur， defalut set to 'lazy'
set to  "lazy-once" in development can make rebuild faster


webpackPrefetch: true
webpackPreLoad: true
https://webpack.js.org/api/module-methods/#magic-comments
```


## TODO

build-utils needs to learn and wrapped it.