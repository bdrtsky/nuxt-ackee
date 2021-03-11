### **📣⚠📣 `nuxt-ackee` is moving to `@nuxtjs/ackee` 📣⚠📣**

**Ackee module for Nuxt.js has been transferred to the [nuxt-community organization](https://github.com/nuxt-community/ackee-module). A new version has been released taking advantage of the latest features coming with Ackee. Discover the new doc at [ackee.nuxtjs.org](https://ackee.nuxtjs.org)!**

**If you're looking for the old version of this module, check out the [v2 branch](https://github.com/bdrtsky/nuxt-ackee/tree/v2). The following readme also refers to this old version:**

# nuxt-ackee

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> Nuxt.js module for [Ackee analytics](https://ackee.electerious.com)

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `nuxt-ackee` dependency to your project

```bash
yarn add --dev nuxt-ackee # or npm install --save-dev nuxt-ackee
```

2. Add `nuxt-ackee` to the `buildModules` section of `nuxt.config.js`

```js
{
  // use `modules` property is using Nuxt < 2.9.0
  buildModules: [
    'nuxt-ackee'
  ],
  ackee: {
    server: 'https://example.com',
    domainId: 'xxx-xxx-xxx',
    ignoreLocalhost: false, // defaults to true
    detailed: true // defaults to false
  }
}
```

The module will directly record each route (initial + client-side navigation).

It will also expose `this.$ackee` and `context.$ackee` on client-side which is an [instance of ackee-tracker](https://github.com/electerious/ackee-tracker#instance-api).

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Sergey Bedritsky <sergey.bedritsky@gmail.com>

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxt-ackee/latest.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/nuxt-ackee
[npm-downloads-src]: https://img.shields.io/npm/dt/nuxt-ackee.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/nuxt-ackee
[circle-ci-src]: https://img.shields.io/circleci/project/github/bdrtsky/nuxt-ackee.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/bdrtsky/nuxt-ackee
[codecov-src]: https://img.shields.io/codecov/c/github/bdrtsky/nuxt-ackee.svg?style=flat-square
[codecov-href]: https://codecov.io/gh/bdrtsky/nuxt-ackee
[license-src]: https://img.shields.io/npm/l/nuxt-ackee.svg?style=flat-square
[license-href]: https://npmjs.com/package/nuxt-ackee
