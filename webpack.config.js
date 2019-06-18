const path = require('path')
module.exports = {
  mode: 'production', //可选development, 打包后的文件不会被压缩
  entry: './src/index.js', //下面方式的简写
  // entry: {
  //   main: './src/index.js'
  // },
  module: {
    rules: [{
      test:/\.(png|jpg|gif)$/,
      use: {
        loader: 'file-loader'
      }
    }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist') //__dirname即webpack.config.js的路径
  }
}