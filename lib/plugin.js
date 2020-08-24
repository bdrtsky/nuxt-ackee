import * as ackeeTracker from 'ackee-tracker'

let trackerInstance = false

export default async function(context, inject) {
  // plugin is called only once when laoding the app on client-side
  const ackee = ackeeTracker.create(
    {
      server: '<%= options.server %>',
      domainId: '<%= options.domainId %>',
    },
    {
      ignoreLocalhost: <%= options.ignoreLocalhost ? 'true' : 'false' %>,
      detailed: <%= options.detailed ? 'true' : 'false' %>,
    }
  )

  inject('ackee', ackee)

  context.app.router.afterEach((to, from) => {
    ackee.record()
  })
}
