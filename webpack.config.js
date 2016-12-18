module.exports = function (options) {
  const config = require('zoro-kit/build/webpack.config.app')(options)

  config.babel.plugins.push('transform-vue-jsx')

  return config
}
