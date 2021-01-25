import theme from '@nuxt/content-theme-docs'

export default theme({
  docs: {
    primaryColor: '#65DEB1'
  },
  buildModules: ['nuxt-ackee'],
  ackee: {
    server: 'https://ackee.nuxtjs.com',
    domainId: '',
    detailed: true
  }
})
