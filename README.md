# nuxt-ackee

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> Nuxt.js module for Ackee analytics

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `nuxt-ackee` dependency to your project

```bash
yarn add nuxt-ackee # or npm install nuxt-ackee
```

2. Add `nuxt-ackee` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    'nuxt-ackee',

    // With options
    ['nuxt-ackee', { /* module options */ }]
  ]
}
```

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

[circle-ci-src]: https://img.shields.io/circleci/project/github/git@github.com:bdrtsky/nuxt-ackee.git.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/git@github.com:bdrtsky/nuxt-ackee.git

[codecov-src]: https://img.shields.io/codecov/c/github/git@github.com:bdrtsky/nuxt-ackee.git.svg?style=flat-square
[codecov-href]: https://codecov.io/gh/git@github.com:bdrtsky/nuxt-ackee.git

[license-src]: https://img.shields.io/npm/l/nuxt-ackee.svg?style=flat-square
[license-href]: https://npmjs.com/package/nuxt-ackee
