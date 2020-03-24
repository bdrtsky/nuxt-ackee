import * as ackeeTracker from 'ackee-tracker'

let trackerInstance = false

export default async function({ router, store, app }, { options }) {
  if (
    '<%= options.server %>' &&
    '<%= options.domainId %>' &&
    trackerInstance === false
  ) {
    app.router.afterEach((to, from) => {
      trackerInstance = ackeeTracker
        .create(
          {
            server: '<%= options.server %>',
            domainId: '<%= options.domainId %>',
          },
          {
            ignoreLocalhost: '<%= options.ignoreLocalhost %>' === 'false' ? false : true,
            detailed: '<%= options.detailed %>' === 'true' ? true : false,
          }
        )
        .record()
    })
  }
}
