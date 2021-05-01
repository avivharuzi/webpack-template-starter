const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');

// noinspection JSCheckFunctionSignatures
module.exports = merge(common, {
  mode: 'production',
});
