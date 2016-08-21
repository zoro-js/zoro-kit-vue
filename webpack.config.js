const config = require('zoro-kit/build/webpack.config.app')

config.babel.plugins.push('transform-vue-jsx')

module.exports = config
