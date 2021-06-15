const path = require('path')
// const webpack = require('webpack'); //to access built-in plugins
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


const rootPath = path.resolve(__dirname, '..')
const srcPath = path.resolve(rootPath, 'src')
const mainPagePath = path.resolve(srcPath, 'main')
const _404PagePath = path.resolve(srcPath, '404')
const distPath = path.resolve(rootPath, 'dist')

module.exports = {
    resolve: {
        alias: {
            '@src': srcPath,
        }
    },
    entry: {
        index: path.resolve(mainPagePath, 'index.js'),
        '404': path.resolve(_404PagePath, 'index.js')
    },
    output: {
        path: distPath,
        filename: '[name].js',
        publicPath: 'dist/',
    },
    module: {
        rules: [
            {
                test: /\.css$/, use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: path.resolve(distPath, 'css'),
                    },
                }, 'css-loader']
                // process.env.NODE_ENV === 'development' ? 'style-loader'
            },
            {
                test: /[\\/]model[\\/]/,
                loader: 'file-loader',
                options: {
                    outputPath: 'live2dmodel',
                }
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(srcPath, 'plugins/live2d/model'),
                    to: path.resolve(distPath, 'live2d/model')
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new HtmlWebpackPlugin({
            filename: path.resolve(rootPath, 'index.html'),
            template: path.resolve(mainPagePath, 'index.html'),
            inject: true,
            chunks: ['index'],
            inlineSource: '.(js|css)$' // 直接嵌入js和css到html内联
        }),
        new HtmlWebpackPlugin({
            filename: path.resolve(rootPath, '404.html'),
            template: path.resolve(_404PagePath, 'index.html'),
            inject: true,
            chunks: ['404'],
            inlineSource: '.(js|css)$' // 直接嵌入js和css到html内联
        })
    ],
    // optimization: {
    //     // https://webpack.js.org/plugins/split-chunks-plugin/
    //     splitChunks: {
    //         // name: 'global-commons',
    //         // chunks: 'initial',
    //         // // minChunks: 1, // 表示提取公共部分最少的文件数
    //         // minSize: 0,  // 表示提取公共部分最小的大小
    //         cacheGroups: {
    //             'live2d-vendors': {
    //                 name: 'vendors',
    //                 filename: path.resolve(distPath, 'live2d/[name]-bundle.[ext]'),
    //                 test: /[\\/]live2d[\\/]/,
    //                 minSize: 0,
    //                 priority: 10
    //             }
    //         }
    //     }
    // },
}