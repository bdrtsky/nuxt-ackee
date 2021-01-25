import * as ackeeTracker from 'ackee-tracker'

export default async function(context, inject) {
  // plugin is called only once when laoding the app on client-side
  const ackee = ackeeTracker.create(
    '<%= options.server %>',
    {
      ignoreLocalhost: <%= options.ignoreLocalhost ? 'true' : 'false' %>,
      detailed: <%= options.detailed ? 'true' : 'false' %>
    }
  )

  inject('ackee', ackee)

  let record
  context.app.router.afterEach((to, from) => {
    if (record) {
      record.stop()
    }

    record = ackee.record('<%= options.domainId %>')
  })
}
