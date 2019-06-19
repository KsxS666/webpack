const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// plugin 可以在webpack运行到某个时刻的时候，帮你做一些事情

module.exports = {
  mode: 'production', //可选development, 打包后的文件不会被压缩
  // entry: './src/index.js', //下面方式的简写
  entry: {
    dist: './src/index.js',
    sub: './src/index.js'
  },
  module: {
    rules: [{
      test:/\.(png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          name: '[name]_[hash].[ext]',
          outputPath: 'images/',
          limit: 2048  //图片若小于2kb，会被生成字符串打包至bundle.js里，反之，将生成images文件夹并打包至images文件夹里
        }
      }
    },{
      test:/\.(eot|ttf|svg|woff)$/,
      use: {
        loader: 'file-loader'
      }
    },
    {
      test:/\.scss$/,
      use: ['style-loader', 
      {
        loader: 'css-loader',
        options: {
          importLoaders: 2,  //scss文件通过@import引入另外的scss文件之前仍然走sass-loader和postcss-loader
          // modules: true
        },
      },
      'sass-loader', 
      'postcss-loader']
    }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'src/index.html'
  }), new CleanWebpackPlugin()],
  output: {
    // publicPath: 'http://cdn.com.cn', //index.html里引入打包后的js里的前缀域名
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist') //__dirname即webpack.config.js的路径
  }
}