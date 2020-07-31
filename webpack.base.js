const path = require('path');
const HappyPack = require('happypack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js',
    vendor: ['react', 'react-dom'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  optimization: { // 提取公共文件到common.js
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'initial',
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 2,
          name: 'app.common'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: 'happypack/loader?id=babel',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'happypack/loader?id=babel',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'] // 注意排列顺序，执行顺序与排列顺序相反
      },
      {
        test: /\.(png|jpg|gif|ttf|eot|woff(2)?)(\?[=a-z0-9]+)?$/,
        use: [{
            loader: 'url-loader',
            options: {
                query: {
                    // 阈值 单位byte
                    limit: '8192',
                    name: 'images/[name]_[hash:7].[ext]',
                }
            }
        }]
      },
    ]
  },
  plugins: [
    new HappyPack({ // 配置子线程打包，以babel-loader为例
      id: 'babel',
      threads: 2,
      loaders: ['babel-loader']
    }),
    new HtmlWebpackPlugin({
      template: './view/index.html'
    }),
  ]
}