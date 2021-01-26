export default function (context, inject) {
  inject('ackee', {
    <% if (['opt-in', 'opt-out'].includes(options.detailed)) { %>// data
    detailed: undefined,
    unknown: true,
    // methods
    optInDetails() {},
    optOutDetails() {},<% } %>
    record() {},
    updateRecord() {},
    action() {},
    updateAction() {}
  })
}
