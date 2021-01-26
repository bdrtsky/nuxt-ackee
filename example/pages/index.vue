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
    <template v-if="typeof $ackee.details.unknown !== 'undefined'">
      <hr>
      Only when <pre>options.detailed = 'opt-in'|'opt-out'</pre>:<br>
      Value: <pre>{{ $ackee.details.value }}</pre><br>
      Preference: <pre>{{ $ackee.details.preference }}</pre><br>
      Unknown: <pre>{{ $ackee.details.unknown }}</pre><br>
      <button @click="$ackee.details.optIn">
        Opt-In
      </button>
      <button @click="$ackee.details.optOut">
        Opt-Out
      </button>
      <button @click="clearStorage">
        Clear local storage
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
    clearStorage () {
      window.localStorage.clear()
      window.location.reload()
    }
  }
}
</script>

<style scoped>
pre {
  display: inline
}
</style>
