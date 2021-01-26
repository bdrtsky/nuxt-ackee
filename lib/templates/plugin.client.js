import Vue from 'vue'
import * as ackeeTracker from 'ackee-tracker'

<% if (['opt-in', 'opt-out'].includes(options.detailed)) { %>
const storageKey = '<%= options.storageKey %>'
<% } %>

export default async function(context, inject) {
  <% if (options.detailed === 'opt-in') { %>
  const detailed = window.localStorage.getItem(storageKey) === 'opted-in'
  <% } else if (options.detailed === 'opt-out') { %>
  const detailed = window.localStorage.getItem(storageKey) !== 'opted-out'
  <% } else { %>
  const detailed = <%= options.detailed ? 'true' : 'false' %>
  <% } %>

  // plugin is called only once when laoding the app on client-side
  const { record, updateRecord, action, updateAction } = ackeeTracker.create(
    '<%= options.server %>',
    {
      detailed,
      ignoreLocalhost: <%= options.ignoreLocalhost ? 'true' : 'false' %>,
      ignoreOwnVisits: <%= options.ignoreOwnVisits ? 'true' : 'false' %>
    }
  )

  const $ackee = new Vue({
    <% if (['opt-in', 'opt-out'].includes(options.detailed)) { %>data: {
      detailed,
      unknown: false
    },
    <% } %>methods: {
      <% if (['opt-in', 'opt-out'].includes(options.detailed)) { %>optInDetails() {
        window.localStorage.setItem(storageKey, 'opted-in')
        this.detailed = true
      },
      optOutDetails() {
        window.localStorage.setItem(storageKey, 'opted-out')
        this.detailed = false
      },<% } %>
      record,
      updateRecord,
      action,
      updateAction
    }
  })

  inject('ackee', $ackee)

  let currentRecord
  context.app.router.afterEach((to, from) => {
    if (currentRecord) {
      currentRecord.stop()
    }

    currentRecord = $ackee.record(
      '<%= options.domainId %>'<% if (['opt-in', 'opt-out'].includes(options.detailed)) { %>,
      ackeeTracker.attributes($ackee.detailed)<% } %>
    )
  })
}
