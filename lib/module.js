const { resolve } = require('path')
const defu = require('defu')
const log = require('consola').withScope('nuxt-ackee')

const defaults = {
  server: '',
  domainId: '',
  ignoreLocalhost: true,
  detailed: false
}

module.exports = function (moduleOptions) {
  const options = defu({
    ...this.options.ackee,
    ...moduleOptions
  }, defaults)

  if (!options.server || !options.domainId) {
    return log.warn('Could not activate nuxt-ackee module, `server` and `domainId` properties are required')
  }

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    mode: 'client',
    ssr: false,
    fileName: 'nuxt-ackee.client.js',
    options
  })
}

module.exports.meta = require('../package.json')
