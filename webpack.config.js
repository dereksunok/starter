const {merge} = require('webpack-merge');
const base = require('./webpack.base');

const dev = {
  devtool: 'inline-source-map',
}
module.exports = merge(base, dev);