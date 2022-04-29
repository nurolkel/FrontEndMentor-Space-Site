const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = { 
    mode: 'production',
    entry: {
        main: path.resolve(__dirname,'src/app/index.js'),
        destination: path.resolve(__dirname, 'src/app/destination.js'),
        crew: path.resolve(__dirname,'src/app/crew.js'),
        technology: path.resolve(__dirname, 'src/app/technology.js')
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: '[name].js',
        clean: true,
        assetModuleFilename: '[name][ext]'
    },
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
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
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
                type: 'asset/resource'
                // use: [
                //     {
                //         loader: 'file-loader',
                //         options: {
                //             name: '[name].[ext]',
                //             outputPath: 'assets/',
                //             publicPath: 'assets/'
                //         }
                //     }
                // ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
              },
              { 
                test: /\.json$/,
                exclude: /node_modules/,
                type: 'asset/source' //json
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Space Tourism | Home',
            filename: 'index.html',
            template: 'src/index.html',
            chunks:['main']
        }),
        new HtmlWebpackPlugin({
            title: 'Space Tourism | Destination',
            filename: 'destination.html',
            template: 'src/destination.html',
            chunks:['main','destination']
        }),
        new HtmlWebpackPlugin({
            title: 'Space Tourism | Crew',
            filename: 'crew.html',
            template: 'src/crew.html',
            chunks:['main','crew']
        }),
        new HtmlWebpackPlugin({
            title: 'Space Tourism | Technology',
            filename: 'technology.html',
            template: 'src/technology.html',
            chunks:['main','technology']
        })
    ],
}