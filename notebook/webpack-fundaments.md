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
    }
]
```

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

## webpack.config.js

1. webpack 4 has a list of default settings, e.g. entry:'src/index.js', output:{filename:'main.js',//...}
2. you can directly export a object config, or you can export a function that returns a config which helps you more control of the config.

## `webpack-dev-server`

1. for a live development experience.
2. serves bundles in memory. every time the source code change. it's bundle agian and tells broswer to reload through socket connection.
