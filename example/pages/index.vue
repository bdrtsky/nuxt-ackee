<template>
  <div>
    <pre :style="{ display: 'inline'}">{{ $route.path }}</pre> works!
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
    <button @click="sendEvent">
      Send Event
    </button>
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
    }
  }
}
</script>
