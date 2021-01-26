const { resolve } = require('path')

module.exports = {
  rootDir: resolve(__dirname, '..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  render: {
    resourceHints: false
  },
  buildModules: [{ handler: require('../') }],
  ackee: {
    server: 'https://example.com',
    domainId: 'aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee',
    detailed: 'opt-in',
    ignoreLocalhost: false,
    ignoreOwnVisits: false
  },
  publicRuntimeConfig: {
    ackeeTestEvent: 'ffffffff-gggg-hhhh-iiii-jjjjjjjjjjjj'
  }
}
