var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app/main.ts',
    resolve:{
        extensions:['.js','.ts']
    },
    module:{
        rules:[
        {
            enforce: 'pre',
            test: /\.ts$/,
            loader: 'tslint-loader',
            exclude: /node_modules/,
            options:{
                emitErrors: false,
                failOnHint: true,
                tsConfigFile: 'tsconfig.json',
            }
        },
        {
            enforce: 'pre',
            test: /\.html/,
            loader: 'htmlhint-loader',
            exclude: /node_modules/
        },
        {
            test: /\.html$/,
            loaders:['html-loader']
        },
        {
            test: /\.css$/,
            loader:['raw-loader']
        }
        ],
        exprContextCritical: false
    },
    plugins:[
    new HtmlWebpackPlugin({
        template: 'src/index.html'
    })
    ]
}