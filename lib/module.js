const { resolve } = require('path')
const defu = require('defu')
const log = require('consola').withScope('nuxt-ackee')

const defaults = {
  server: '',
  domainId: '',
  detailed: false,
  ignoreLocalhost: true,
  ignoreOwnVisits: true,
  storageKey: 'nuxt-ackee'
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
    src: resolve(__dirname, 'templates', 'plugin.server.js'),
    fileName: 'nuxt-ackee.server.js',
    options
  })
  this.addPlugin({
    src: resolve(__dirname, 'templates', 'plugin.client.js'),
    ssr: false,
    fileName: 'nuxt-ackee.client.js',
    options
  })
}

module.exports.meta = require('../package.json')
