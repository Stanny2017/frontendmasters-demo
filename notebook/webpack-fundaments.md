# webpack core concepts

## entry

1. tells the webpack what files to load for broswer
2. what code do you want to bundle
3. works together with `output` config

## output

1. tell webpack where and how to distribute bundles (compilations)
2. work with `entry` config.

## loaders

1. tells webpack how to modify the files before its added to dependency graph.
2. loaders are also javascript modules that take source file,and return it in [modified] state.
3. a set of rules can config,and you don't need to memorize them,find them in docs is ok.
4. chainning loaders，from right to left, just like `style(css(less()))`
5. it's easy to create a loader,becauser it just takes the source and converts to whatever you want and returns the result.
```js
rules:[
    {
        test:/\.less$/,
        use:['style','css','less']
    },
    {
        test:/\.jpe?g$/,
        use:[{
            loader:'url-loader',
            options:{
                limit:5000, // if the img size is lower than limit bytes then take base 64 data URI into img url ，otherwise only take this img,put into dist floder, and return the dist URI.(file-loader does this thing, that's why we need to install both of them)
            }
        }] // convert img to base 64 URI data 
    }
]
```
6. common-loader:`css-loader` `style-loader` `url-loader` `filer-loader`

## plugins

1. a plugin is an ES5 'class'(constructor) which implements an apply funciton.
2. the compiler uses it to emit events.
3. if you want to interact with compiler runtime or the event lifecyle.
3. a basic example:(can be customed)

```js

// bell-on-error.js
function BellOnBundlerErrorPlugin(){}

BellOnBundlerErrorPlugin.prototype.apply = function(compiler){
    if(typeof (process) !== 'undefined'){
        compiler.plugin('done', function(stats){
            if(stats.hasErrors()){
                process.stderr.write('\x07');
            }
        });

        compiler.plugin('failed',function(err){
            process.stderr.write('\x07');
        });
    }
}

module.exports = BellOnBundlerErrorPlugin;


// how to use Plugins:
// add new instance of plugin to plugins key in config object.
// provide additional info for arguments.
// webpack.config.js

var BellOnBundlerErrorPlugin = require('bell-on-error');
var webpack = require('webpack')

module.exports = {
    //...
    plugins:[
        new BellOnBundlerErrorPlugin(),

        // just a few of the built in plugins
        new webpack.optimize.CommonsChunkPlugin('vendor'),
        new webpack.optimize.UglifyJsPlugin(),
    ]
}
```

### some common plugins

1. `html-webpack-plugin`: automaticly generate the `dist/index.html` with the script js file in output. when you change filename and other thing it update itself automaticly. with this handy plugin, we don't need to manully change the script resource whichy insert in the index.html file.
2. `clean-webpack-plugin`: clean the dist folder firsr when build new bundles.

## webpack.config.js

1. webpack 4 has a list of default settings, e.g. entry:'src/index.js', output:{filename:'main.js',//...}
2. you can directly export a object config, or you can export a function that returns a config which helps you more control of the config.

## `webpack-dev-server`

1. for a live development experience.
2. instead webpack creates all bundle in `dist` folder, it generates all bundles in `index.html` in memory, and serves that infomation up to express, every time the source code change. it's bundle agian and tells broswer to reload through socket connection.
3. it's a web server based on express and made up of `webpack-dev-middleware` and `express`.
4. `hot module replacement with css` can opens by add `--hot` arguments in scripts; webpack has capability of being able to patch changes are made incrementally and apply them without you having to reload the browser. it's super valuable when page is too complex and in that case reload is painful,and also it's very cool live feedback experience.

## [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin)

1. instead of use `style-loader` which add style tag into document head, `mini-css-extract-plugin` extract the imported css file into a single link tag.
2. it's only webpack4 compatible，it support for lazy-loading css
3. usage:

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
};
```