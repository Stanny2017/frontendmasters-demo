const path = require('path');

module.exports = {
    // entry:'.src/index', default
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.jpe?g$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 5000
                    }
                }]
            },
            // 打包js使用webpack默认行为，
            // {
            //     test:/\.jsx?/ 
            // }
        ]
    }
}