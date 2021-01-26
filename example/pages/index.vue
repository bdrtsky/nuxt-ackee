<template>
  <div>
    <pre>{{ $route.path }}</pre> works!
    <hr>
    <ul>
      <li>
        <nuxt-link to="/">
          Index
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/foo">
          Foo
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/bar">
          Bar
        </nuxt-link>
      </li>
    </ul>
    <hr>
    <button @click="sendEvent">
      Send Event
    </button>
    <template v-if="typeof $ackee.unknown !== 'undefined'">
      <hr>
      Only when <pre>options.detailed = 'opt-in'|'opt-out'</pre>:<br>
      Detailed: <pre>{{ $ackee.detailed }}</pre>, unknown: <pre>{{ $ackee.unknown }}</pre><br>
      <button @click="optIn">
        Opt-In
      </button>
      <button @click="optOut">
        Opt-Out
      </button>
    </template>
  </div>
</template>

<script>
export default {
  methods: {
    sendEvent () {
      if (this.$config.ackeeTestEvent) {
        this.$ackee.action(
          this.$config.ackeeTestEvent,
          { key: 'Test', value: 1 }
        )
      }
    },
    optIn () {
      this.$ackee.optInDetails()
    },
    optOut () {
      this.$ackee.optOutDetails()
    }
  }
}
</script>

<style scoped>
pre {
  display: inline
}
</style>
