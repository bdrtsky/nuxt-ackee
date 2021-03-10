---
title: "Documentation"
description: "Track without being tracking on Nuxt with Ackee analytics"
category: "Home"
features:
  - Add Ackee to your Nuxt app in seconds
  - Ask for user consent easily
  - Automatic script loading
  - Automatic page tracking
  - Access to tracker with $ackee
---

Tracked without being tracked on Nuxt with [Ackee analytics](https://ackee.electerious.com)

## Features

<list :items="features"></list>

[Check Release Notes](https://github.com/bdrtsky/nuxt-ackee/blob/master/CHANGELOG.md)

## Ackee?

[Ackee analytics](https://ackee.electerious.com) is a self-hosted, Node.js based analytics tool that has an incentive on privacy.

You can set up your own Ackee instance pretty easily on [Netlify](https://docs.ackee.electerious.com/#/docs/Get%20started#with-netlify), [Vercel](https://docs.ackee.electerious.com/#/docs/Get%20started#with-vercel), and [many more](https://docs.ackee.electerious.com/#/docs/Get%20started). [MongoDB Atlas](https://www.mongodb.com/pricing) can also provide you with a cloud-based Mongo database.

This module allows you to plug easily your Nuxt website to a domain on your Ackee installation!

## Setup

Add `nuxt-ackee` dependency to your project:

<code-group>
  <code-block label="Yarn" active>

<!-- prettier-ignore -->
```bash
yarn add --dev nuxt-ackee
```

  </code-block>
  <code-block label="NPM">

<!-- prettier-ignore -->
```bash
npm install --save-dev nuxt-ackee
```

  </code-block>
</code-group>

Then add `nuxt-ackee` to the `buildModule` section of `nuxt.config.js` and configure your Ackee `server` and `domainId`:

<!-- prettier-ignore -->
```javascript[nuxt.config.js]
{
  buildModules: [
    'nuxt-ackee'
  ],
  ackee: {
    server: 'https://example.com',
    domainId: 'aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee'
    /* see configuration for more */
  }
}
```

<alert>

Use the `modules` property instead of `buildModules` if you are using `nuxt < 2.9.0`

</alert>

Voilà! Your Nuxt application is ready to report to your Ackee domain~

## Usage

This module injects `$ackee` into your application. It contains an [`ackee-tracker` instance](https://github.com/electerious/ackee-tracker#%EF%B8%8F-instance-api) (but not only, see [asking for consent](#asking-for-consent)). You can use it to create and update new records, actions, and more.

<alert>

This module already takes care of creating a new record on every page navigation. That's why in most cases you don't need to get beyond the above setup!

</alert>

### Sending Events

<!-- prettier-ignore -->
```vue[pages/contact.vue]
<template>
  <form @submit="onSubmit"><!-- ... --></form>
</template>

<script>
export default {
  methods: {
    onSubmit(e) {
      this.$ackee.action(
        'ffffffff-gggg-hhhh-iiii-jjjjjjjjjjjj', // actionId
        {
          key: 'Contact Form Submit',
          value: 1
        }
      )
    }
  }
}
</script>
```

<alert>

Ackee recommends to ask user for consent before sending events. For that purpose you can leverage this module's injected [`details.value`](#detailsvalue) property when using the `detailed` option, see [asking for consent](#asking-for-consent) below. More about events on [Ackee documentation](https://docs.ackee.electerious.com/#/docs/Events).

</alert>

### Asking for Consent

The [detailed option](#detailed) allows you to gather personal data from your visitors. [Ackee recommends](https://docs.ackee.electerious.com/#/docs/Anonymization#personal-data) asking for user consent before enabling this option. To get started, set the `detailed` option in your Ackee configuration:

<!-- prettier-ignore -->
```javascript[nuxt.config.js]
ackee: {
  // do not gather detailed data unless user gives permission
  detailed: 'opt-in'
}
```

> An `opt-out` mode exists, working the other way around. Consider it if you were using `detailed: true`, it's better than nothing~
>
> See all [available values](#detailed).

From now on, a new object will be available at the key `details` in the injected `$ackee` object with the following methods and reactive properties:

- `optIn()`: opt-in current user from sharing detailed data;
- `optOut()`: opt-out current user from sharing detailed data;
- `value`: can be used to know if Ackee is allowed to send data;
- `preference`: contains the user's preference if any;
- `unknown`: since user opt status is detected on client-side we cannot know it when on server side. Use this property to prevent showing your banner there.

**Example:**

<!-- prettier-ignore -->
```vue[components/ConsentBanner.vue]
<!-- assuming `detailed: 'opt-in'` -->
<template>
  <div v-if="!$ackee.details.unknown && !$ackee.details.preference">
    Allow website to gather data for improvement? (language, browser, screen
    width, etc.)
    <button @click="$ackee.details.optIn">Sure!</button>
    <button @click="$ackee.details.optOut">No thank you!</button>
  </div>
</template>
```

## Configuration

You can configure `nuxt-ackee` with the `ackee` property in your `nuxt.config.js` or directly when registering the module in the `buildModules` array by using the array syntax.

<code-group>
  <code-block label="ackee key" active>

<!-- prettier-ignore -->
```javascript[nuxt.config.js]
export default {
  ackee: {
    /* configuration */
  }
}
```

  </code-block>
  <code-block label="buildModules array">

<!-- prettier-ignore -->
```javascript[nuxt.config.js]
export default {
  buildModules: {
    ['nuxt-ackee', {
      /* configuration */
    }]
  }
}
```

  </code-block>
</code-group>

### Properties

#### server

- Type: `String`
- `required`

An URL that points to your [Ackee](https://github.com/electerious/Ackee) installation. The `server` property must not end with a slash.

<!-- prettier-ignore -->
```javascript[nuxt.config.js]
ackee: {
  // Nuxt.js private Ackee server example
  server: 'https://ackee.nuxtjs.com'
}
```

#### domainId

- Type: `String`
- `required`

Id of the desired domain to target.

<!-- prettier-ignore -->
```javascript[nuxt.config.js]
ackee: {
  // example domain id
  domainId: 'aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee'
}
```

#### detailed

- Type: `Boolean|String`
- Default: `false`

Enable or disable tracking of personal data. Possible values are:

- `false`, never collect detailed data;
- `true`, always collect detailed data;
- `'opt-in'`, do not gather detailed data unless user gives permission;
- `'opt-out'`, gather detailed data unless user ask not to.

<!-- prettier-ignore -->
```javascript[nuxt.config.js]
ackee: {
  // tells Ackee to gather detailed data only with user's permission
  detailed: 'opt-in'
}
```

> See [Ackee's recommendations](https://docs.ackee.electerious.com/#/docs/Anonymization#personal-data) regarding this feature.

#### ignoreLocalhost

- Type: `Boolean`
- Default: `true`

Enable or disable tracking when on localhost.

<!-- prettier-ignore -->
```javascript[nuxt.config.js]
ackee: {
  // also tracks when on localhost
  ignoreLocalhost: false
}
```

#### ignoreOwnVisits

- Type: `Boolean`
- Default: `true`

Enable or disable the tracking of your own visits.

<!-- prettier-ignore -->
```javascript[nuxt.config.js]
ackee: {
  // also tracks your own visits
  ignoreOwnVisits: false
}
```

<alert type="warning">

For this feature to work you need to set up an `Access-Control-Allow-Credentials` header on your Ackee installation, [more info](https://docs.ackee.electerious.com/#/docs/CORS%20headers#credentials).

</alert>

<alert type="warning">

This feature should be turned off when using a wildcard `Access-Control-Allow-Origin` header, [more info](https://docs.ackee.electerious.com/#/docs/Options#cors-headers).

</alert>

#### storageKey

- Type: `String`
- Default: `nuxt-ackee`

When using `'opt-in'` or `'opt-out'` with the [detailed](#detailed) option, used to determine the local storage key used to save user's preference.

<!-- prettier-ignore -->
```javascript[nuxt.config.js]
ackee: {
  // store user's preference at `custom-key` inside their local storage
  storageKey: 'custom-key'
}
```

### Defaults

Default configuration only expects you to provide your [Ackee server](#server) and [domain ID](#domainid).

<!-- prettier-ignore -->
```javascript[nuxt.config.js]
export default {
  ackee: {
    server: '',
    domainId: '',
    detailed: false,
    ignoreLocalhost: true,
    ignoreOwnVisits: true,
    storageKey: 'nuxt-ackee'
  }
}
```

## \$ackee object

This module globally injects a `$ackee` object, meaning that you can access it anywhere using `this.$ackee`. For plugins, `asyncData`, `nuxtServerInit` and middlewares, you can access it from `context.$ackee`.

<alert type="warning">

`details.*` methods and properties are only available when using `'opt-in'` or `'opt-out'` with the [detailed](#detailed) option.

</alert>

### Methods

#### record(), updateRecord(), action(), updateAction()

Those methods are directly forwarded from [`ackee-tracker` instance API](https://github.com/electerious/ackee-tracker#%EF%B8%8F-instance-api).

#### details.optIn()

Opt-in current user from sharing detailed data.

#### details.optOut()

Opt-out current user from sharing detailed data.

### Properties

#### details.value

- Type: `Boolean`
- Value: `true` when Ackee is allowed to send detailed data.

#### details.preference

- Type: `String`
- Values: `null` when no preference has been set, `'opted-in'`, `'opted-out'`

#### details.unknown

- Type: `Boolean`
- Value: `true` when opt status is not yet detected, before client-side.

## Contributing

You're welcome to contribute to this module!

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `yarn dev` or `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Sergey Bedritsky <sergey.bedritsky@gmail.com>
