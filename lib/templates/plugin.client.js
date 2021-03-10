<% if (['opt-in', 'opt-out'].includes(options.detailed)) { %>import Vue from 'vue'
<% } %>import * as ackeeTracker from 'ackee-tracker'

<% if (['opt-in', 'opt-out'].includes(options.detailed)) { %>
const storageKey = '<%= options.storageKey %>'
<% } %>

export default function(context, inject) {
  <% if (options.detailed === 'opt-in') { %>
  const detailed = window.localStorage.getItem(storageKey) === 'opted-in'
  <% } else if (options.detailed === 'opt-out') { %>
  const detailed = window.localStorage.getItem(storageKey) !== 'opted-out'
  <% } else { %>
  const detailed = <%= options.detailed ? 'true' : 'false' %>
  <% } %>

  // plugin is called only once when laoding the app on client-side
  const ackee = ackeeTracker.create(
    '<%= options.server %>',
    {
      detailed,
      ignoreLocalhost: <%= options.ignoreLocalhost ? 'true' : 'false' %>,
      ignoreOwnVisits: <%= options.ignoreOwnVisits ? 'true' : 'false' %>
    }
  )

  <% if (['opt-in', 'opt-out'].includes(options.detailed)) { %>
  ackee.details = new Vue({
    data: {
      value: detailed,
      preference: window.localStorage.getItem(storageKey),
      unknown: false
    },
    methods: {
      optIn() {
        window.localStorage.setItem(storageKey, 'opted-in')
        this.value = true
        this.preference = 'opted-in'
      },
      optOut() {
        window.localStorage.setItem(storageKey, 'opted-out')
        this.value = false
        this.preference = 'opted-out'
      }
    }
  })
  <% } %>

  inject('ackee', ackee)

  let currentRecord
  context.app.router.afterEach((to, from) => {
    if (currentRecord) {
      currentRecord.stop()
    }

    currentRecord = ackee.record(
      '<%= options.domainId %>'<% if (['opt-in', 'opt-out'].includes(options.detailed)) { %>,
      ackeeTracker.attributes(ackee.details.value)<% } %>
    )
  })
}
