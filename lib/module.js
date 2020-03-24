const { resolve } = require('path')

module.exports = function (moduleOptions) {
  const options = {
    ...this.options.ackee,
    ...moduleOptions
  }

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    ssr: false,
    fileName: 'nuxt-ackee.js',
    options
  })
}

module.exports.meta = require('../package.json')
