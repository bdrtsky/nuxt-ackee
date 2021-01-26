export default function (context, inject) {
  inject('ackee', {
    <% if (['opt-in', 'opt-out'].includes(options.detailed)) { %>
    details: {
      value: null,
      preference: null,
      unknown: true,
      optIn() {},
      optOut() {}
    },<% } %>
    record() {},
    updateRecord() {},
    action() {},
    updateAction() {}
  })
}
