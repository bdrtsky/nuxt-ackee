import * as ackeeTracker from 'ackee-tracker'

let trackerInstance = false

export default async function(context, inject) {
  // Plugin is called only once when laoding the app on client-side
  const ackee = ackeeTracker.create(
    {
      server: '<%= options.server %>',
      domainId: '<%= options.domainId %>',
    },
    {
      ignoreLocalhost: <%= options.ignoreLocalhost %>,
      detailed: <%= options.detailed %>,
    }
  )

  inject('ackee', ackee)

  context.app.router.afterEach((to, from) => {
    console.log('Track on ackee')
    ackee.record()
  })
}
