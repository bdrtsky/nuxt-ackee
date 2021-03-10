[![nuxt-ackee](/docs/static/preview.png)](https://nuxt-ackee.netlify.app)

# nuxt-ackee

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> Tracked without being tracked on Nuxt with [Ackee analytics](https://ackee.electerious.com)

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
- [📖 &nbsp;Read the documentation](https://nuxt-ackee.netlify.app)

```js
{
  // use `modules` property is using Nuxt < 2.9.0
  buildModules: [
    'nuxt-ackee'
  ],
  ackee: {
    server: 'https://example.com',
    domainId: 'xxx-xxx-xxx',
    detailed: true, // defaults to false
    ignoreLocalhost: false, // defaults to true
    ignoreOwnVisits: false // defaults to true
  }
}
```

- Add Ackee to your Nuxt app in seconds
- Ask for user consent easily
- Automatic script loading
- Automatic page tracking
- Access to tracker with `$ackee`

It will also expose `this.$ackee` and `context.$ackee` on client-side which is an [instance of ackee-tracker](https://github.com/electerious/ackee-tracker#%EF%B8%8F-api).

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `yarn dev` or `npm run dev`

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
