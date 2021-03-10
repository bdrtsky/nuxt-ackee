import { withDocus } from 'docus'

export default withDocus({
  docs: {
    colors: {
      primary: '#65deb1'
    }
  },
  buildModules: ['nuxt-ackee'],
  ackee: {
    server: 'https://ackee.nuxtjs.com',
    domainId: '',
    detailed: true
  }
})
